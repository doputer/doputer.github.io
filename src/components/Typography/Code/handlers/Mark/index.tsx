import { type AnnotationHandler, InnerLine } from 'codehike/code';

const mark: AnnotationHandler = {
  name: 'mark',
  Line: (props) => {
    return <InnerLine merge={props} className="px-4" />;
  },
  AnnotatedLine: (props) => {
    return <InnerLine merge={props} className="bg-mark px-4" />;
  },
};

export default mark;
