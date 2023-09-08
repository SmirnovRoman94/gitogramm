import { mount } from "@vue/test-utils";
import  issues  from "./issues";

describe("issues component", () => {
    it("выполним емит события loadContent", async() => {
        const wrapper = mount(issues);

        await wrapper.find('.toggler btn').trigger('click');

        expect(wrapper.emitted().loadContent.length).toBe(1);
    });

    it("отрисует список элементов", async() => {
        const issue = {};

        const wrapper = mount(issues, {
            propsData: {
                issues: Array.from({length: 6}).map(x => issue)
            }
        });

        expect(wrapper.find('.comments-comntainer').exists()).toBe(false);

        await wrapper.find('.toggler btn').trigger('click');

        expect(wrapper.findAll('.comment-item').length).toBe(6);
    })  
});
