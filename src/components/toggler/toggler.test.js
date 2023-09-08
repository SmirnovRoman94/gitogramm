import { shallowMount } from "@vue/test-utils";
import toggler from "./toggler"

describe("toggler component", () => {
    it("Изменяет надпись при клике", async() => {
        const wrapper = shallowMount(toggler);

        expect(wrapper.find('.text').text()).toBe("Hide issued");

        await wrapper.find('.btn').trigger('click');

        expect(wrapper.find('.text').text()).toBe("Hide issued");
    })
})