import './ContentCard.css'

export default function ContentCard({ column, between, children }) {

    return <div className={`content ${column} ${between}`}>
        {children}
    </div>
}
