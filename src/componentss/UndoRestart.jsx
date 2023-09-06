import { RiRestartLine } from 'react-icons/ri';
import { BiRedo, BiUndo } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { ActionCreators } from 'redux-undo'
import Tooltip from './Tooltip';

const UndoRestart = ({ resetSlice }) => {
    const dispatch = useDispatch();
    const handleUndo = () => { dispatch(ActionCreators.undo()); }
    const handleRedo = () => { dispatch(ActionCreators.redo()); };

    return (
        <div className="absolute top-28 md:top-16 right-0 p-3  md:mt-5 mr-5  rounded-3xl bg-white flex flex-col gap-3">
            <Tooltip title='undo' >
                <BiUndo className=' cursor-pointer font-black text-xl' onClick={handleUndo} />
            </Tooltip>

            <Tooltip title='redo' >
                <BiRedo className=' cursor-pointer font-black text-xl' onClick={handleRedo} />
            </Tooltip>

            <Tooltip title='restart' >
                <RiRestartLine className=' cursor-pointer text-lg'
                    onClick={() => { dispatch(resetSlice()); }}
                />
            </Tooltip>
        </div>
    )
}

export default UndoRestart