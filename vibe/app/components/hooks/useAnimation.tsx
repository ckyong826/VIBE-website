

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



export {FadeInVariants,FadeOutVariants,FadeLeftVariants,FadeRightVariants,FadeUpVariants,FadeDownVariants}