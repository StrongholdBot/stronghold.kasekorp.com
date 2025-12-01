require "yaml"

module Jekyll
  class CommandGenerator < Generator
    safe true
    priority :normal

    def generate(site)
      data = site.data["commands"] || []

      generate_nodes(site, data, [], "")

      site.data["command_tree"] = build_tree(site)
    end

    def generate_nodes(site, nodes, ancestry, path)
      nodes.each do |node|
        name = node["name"]
        slug = name.downcase.gsub(" ", "-")
        new_path = path.empty? ? slug : "#{path}/#{slug}"

        if node["usage"] || node["description"]
          site.collections["commands"].docs << build_doc(site, node, ancestry, new_path)
        end

        generate_nodes(site, node["children"], ancestry + [name], new_path) if node["children"]
      end
    end

    def build_tree(site)
      root = {}

      site.collections["commands"].docs.each do |doc|
        node = root
        doc.data["ancestry"].each do |ancestor|
          node[ancestor] ||= {}
          node = node[ancestor]
        end
        node[doc.data["title"]] ||= {}
      end

      root
    end

    def build_doc(site, node, ancestry, path)
      Jekyll::Document.new(
        site.in_source_dir("_commands", "#{path}.md"),
        :site        => site,
        :collection  => site.collections["commands"]
      ).tap do |doc|
        doc.data["title"]       = node["name"]
        doc.data["usage"]       = node["usage"]
        doc.data["description"] = node["description"]
        doc.data["ancestry"]    = ancestry
        doc.data["depth"]       = ancestry.size + 1
        doc.data["layout"]      = "command"
        doc.data["children"]    = node["children"]
        doc.data["permissions"] = node["permissions"]
      end
    end
  end
end
