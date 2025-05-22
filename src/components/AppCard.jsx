// Icone
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

// Funzioni
/**
 * Truncate text to given length
 *
 * @param {string} text 
 * @param {num} maxLength 
 * @returns {string}
 */
const truncateText = (text, maxLength) => { return text && text.length > maxLength ? text.slice(0, maxLength) + '...' : text };

function AppCard({ item, filter }) {
    
    // Card Background
    let cardBg
    if (filter === 'repositories') {
        cardBg = 'repo-bg'
    }

    if (filter === 'users' && item.type === 'Organization') {
        cardBg = 'org-bg'
    } else if (filter === 'users' && item.type === 'User') {
        cardBg = 'client-bg'
    }

    return (
        <div className="card d-flex justify-between">
            <div className={`card-header ${cardBg}`}></div>
            <img className="card-img" src={filter === 'repositories' ? item.owner.avatar_url : item.avatar_url} alt={`Profile image of ${item.full_name}`} />
            <div className="card-body">
                <h2 className="card-title">{filter === 'repositories' ? item.full_name : item.login}</h2>
                <h3 className="card-label">{filter === 'repositories' ? item.visibility : item.type}</h3>
                {
                    filter === 'repositories' &&
                    <div>
                        <p className="card-description">{truncateText(item.description, 50)}</p>
                        <p className='card-details'>
                            <span className='card-icon'><FontAwesomeIcon icon={faStar} /></span>
                            {item.stargazers_count}
                            <hr className='divider' />
                            <span className='card-icon'><FontAwesomeIcon icon={faCircleExclamation} /></span>
                            {item.open_issues}
                        </p>
                    </div>
                }
            </div>
            <div className="card-footer">
                <a href={item.html_url} target="_blank" className='d-flex justify-center'>
                    <p>{filter === 'repositories' ? 'View Repo' : 'View Profile'}</p>
                    <span className='card-icon'><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span>
                </a>
            </div>
        </div>
    )
}

export default AppCard