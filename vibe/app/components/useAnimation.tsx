import { easeInOut } from "framer-motion"


const FadeInVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 1.5,
      ease: 'easeInOut'
    }
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: 'easeInOut'
    }
  }
}

const FadeOutVariants={
  hidden: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  },
  visible: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const FadeLeftVariants={
  hidden: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const FadeRightVariants={
  hidden: {
    opacity: 0,
    x: -100,
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const FadeUpVariants={
  hidden: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const FadeDownVariants={
  hidden: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const itemFadeInVariants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const DelayVariants = {
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  hidden: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};


export {FadeInVariants,
        FadeOutVariants,
        FadeLeftVariants,
        FadeRightVariants,
        FadeUpVariants,
        FadeDownVariants,
        itemFadeInVariants,
        DelayVariants,

      }