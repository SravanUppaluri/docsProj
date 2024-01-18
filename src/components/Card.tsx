import {FaFileAlt} from "react-icons/fa";
import {IoCodeDownloadOutline} from "react-icons/io5";
import {IoMdCloseCircleOutline} from "react-icons/io";
import {motion} from "framer-motion";

const Card = ({data, reference}: any) => {
  console.log(`bg-${data.tag.tagColor}-400`);
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{scale: 1.3}}
        dragElastic={0.2}
        dragTransition={{bounceDamping: 10, bounceStiffness: 1000}}
        className="w-[180px] relative h-60 bg-zinc-600 rounded-[35px] z-[3] text-white overflow-hidden"
      >
        <div className="p-2 pt-6">
          <FaFileAlt />
        </div>
        <p className="text-xs mt-3 ps-2 leading-tight">{data.desc}</p>

        <div className="footer absolute bottom-0 w-full">
          <div className="px-4 flex items-center justify-between mb-3">
            <h5 className="text-xs">{data.fileSize}</h5>
            <span className="w-6 h-6 bg-slate-800 rounded-full flex items-center justify-center">
              {data.close ? (
                <IoMdCloseCircleOutline size="1.5em" />
              ) : (
                <IoCodeDownloadOutline size="1.2em" />
              )}
            </span>
          </div>
          {data.tag.isOpen && (
            <div
              className={`tag w-full py-2 bg-${data.tag.tagColor}-400 flex justify-center items-center font-semibold`}
            >
              <h3 className="text-sm">{data.tag.tagTitle}</h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Card;
