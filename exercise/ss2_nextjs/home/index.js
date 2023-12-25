import Link from "next/link";
import styles from "../app/home.module,.css"
import {getPost} from "../data/data";

export default function Display() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <table className={styles.table}>
                    <thead>
                    <tr className={styles.tr}>
                        <th className={styles.th}>ID</th>
                        <th className={styles.th}>TITLE</th>
                        <th className={styles.th}>CATEGORY</th>
                        <th className={styles.th}>TIME</th>
                    </tr>
                    </thead>
                    <tbody>
                    {getPost().map(post => (
                        <tr className={styles.tr} key={post.id}>
                            <td className={styles.td}>{post.id}</td>
                            <td className={styles.td}>{post.title}</td>
                            <td className={styles.td}>{post.category}</td>
                            <td className={styles.td}>{post.time}</td>
                            <td className={styles.td}>
                                <button className="btn btn-sm btn-primary rounded-0">
                                    Edit
                                </button>
                                <button className="btn btn-sm btn-danger rounded-0">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
}