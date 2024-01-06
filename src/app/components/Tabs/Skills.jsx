import { motion } from "framer-motion";

const Items = ({ items }) => {
  return (
    <motion.ul layout className="list pl-2 flex flex-wrap gap-2">
      {items.map((item, i) => (
        <motion.li
          key={item}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duratidon: 0.5, delay: 0.1 * i }}
          className="capitalize animate-pulse"
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
};
export default Items;
