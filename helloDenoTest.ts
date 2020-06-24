import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
//Demo: using test framework
//Additional methods: https://deno.land/std/testing

// Simple name and function, compact form, but not configurable
Deno.test("hello world #1", () => {
    const x = 1 + 2;
    assertEquals(x, 4);
  });

  