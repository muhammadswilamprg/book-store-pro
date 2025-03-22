import { useState } from "react";
import { AUTHORS } from "../../data/authors";
import "./authors.css";

const Authors = () => {
    const [search, setSearch] = useState("");
    const filtered = AUTHORS.filter(author => author.name.toLowerCase().includes(search))

    return (<section className="authors">
        <div className="authors-search-wrapper">
            <input
                type="search"
                placeholder="Search with author name"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
        </div>
        <div className="authors-wrapper">
            {filtered.map(author => 
                <div key={author.id} className="author">
                    <img src={author.image} alt={author.name} className="author-img" />
                    <h2 className="author-name">{ author.name}</h2>
                </div>
            )}
        </div>
    </section> );
}
 
export default Authors;