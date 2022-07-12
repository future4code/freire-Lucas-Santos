import { styled } from "@stitches/react";

export const Img = styled("img", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid",

  variants: {
    type: {
      logo: {
        width: "fit-content",
        height: "100%",
      }
    }
  }
});

export const Strong = styled("strong", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid",

  variants: {
    size: {
      sm: {
        fontSize: "16px",
      },
      md: {
        fontSize: "24px",
      },
      lg: {
        fontSize: "32px",
      },
    },
    type: {
      link: {
        cursor: "pointer",
      }
    },
  }
});

export const Span = styled("span", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid",

  variants: {
    size: {
      sm: {
        fontSize: "12px",
      },
      md: {
        fontSize: "16px",
      },
      lg: {
        fontSize: "24px",
      }
    }
  }
});