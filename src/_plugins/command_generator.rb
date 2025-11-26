require "yaml"

module Jekyll
  class CommandGenerator < Generator
    safe true
    priority :normal

    def generate(site)
      data = site.data["commands"] || []
      generate_nodes(site, data, [], "")
    end

    def generate_nodes(site, nodes, ancestry, path)
      nodes.each do |node|
        name = node["name"]
        slug = name.downcase.gsub(" ", "-")
        new_path = path.empty? ? slug : "#{path}/#{slug}"

        # Create a document only if details exist
        if (node["usage"] || node["description"])
          site.collections["commands"].docs << build_doc(site, node, ancestry, new_path)
        end

        # Recurse children
        generate_nodes(site, node["children"], ancestry + [name], new_path) if node["children"]
      end
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
        doc.data["layout"]      = "command"
      end
    end
  end
end
