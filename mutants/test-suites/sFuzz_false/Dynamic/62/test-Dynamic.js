const Dynamic = artifacts.require("Dynamic");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dynamic', (accounts) => {
	it('test for Dynamic', async () => {
		const DynamicBofyaZX = await Dynamic.new({from: accounts[4]});
		const uintdDnHJfS = BigInt("1963")
		const stringL32lAQW = "CNzO4BXFSmIzodRR4DtKhqwMq8geUjDMrbfWrttwQ74Hhee5IhaGMhKcVyN0NPMAiqgQQ6TBtlpqXKk3o4jb35BfJJoWH"
		const uintDwwvdPL = BigInt("505")
		const uintig2qkPh = BigInt("1773")
		const stringrwBkeF = "D5tZUUQhkfD5vLWI4j0kKDV5Bw8clkeedPm2Bj4wzb3aAhR3Vyyn0TZLl5Se4F6An6v0G7LZm3nPjNbzfL5CGydQQRr"
		const uint622WDv = BigInt("656")
		const boolegUsdP = await DynamicBofyaZX.echidna_test.call({from: accounts[2]});
		const boolns9jSm = await DynamicBofyaZX.yolo.call(uintDwwvdPL, stringL32lAQW, uintdDnHJfS, {from: accounts[0]});
		const boolwyNbpWU = await DynamicBofyaZX.echidna_test.call({from: accounts[4]});
		const boolpa9QXUm = await DynamicBofyaZX.echidna_test.call({from: accounts[1]});
		const boolLOKtQy = await DynamicBofyaZX.yolo.call(uint622WDv, stringrwBkeF, uintig2qkPh, {from: accounts[1]});

		assert.equal(boolLOKtQy, true)
		assert.equal(boolegUsdP, true)
		assert.equal(boolns9jSm, true)
		assert.equal(boolpa9QXUm, true)
		assert.equal(boolwyNbpWU, true)
	});

	it('test for Dynamic', async () => {
		const DynamiceuMpt3L = await Dynamic.new({from: "0x0000000000000000000000000000000000000001"});
		const uintWK2ALG = BigInt("1005")
		const stringiHUiak = "G0WogRwsEaiK752XwVH8Ww5J8LxjfMJn83jrZsFtihdUtyNi46YBYnWOiaMcflLRnV7qmYjOEhELbnzPwcR"
		const uintwTVtbva = BigInt("1345")
		const uinteMEAXoz = BigInt("6")
		const stringXoKfARs = "VlEZRFLMAnN4EuJ1NN4Ig8Y4KdjwcMHApphicmnkVKkeRpsblqgg56tEp1"
		const uint9g4EUj = BigInt("208")
		const uintQNbIlh0 = BigInt("212")
		const stringXhUVi5W = "yAmN1K097UKj4SL7D46nU76rGmzzg9"
		const uintpnh3dB3 = BigInt("698")
		const uintbjtNt0E = BigInt("1111")
		const stringMbM0Mfa = "pr9XVTqgAyLucE3aEIrSYtCWI4KKyfKxzHqc3ZjXOzMqUe8aujv6sVjE2"
		const uinttDedPDc = BigInt("733")
		const booloDBgc8T = await DynamiceuMpt3L.yolo.call(uintwTVtbva, stringiHUiak, uintWK2ALG, {from: accounts[3]});
		const boolwEY6ij1 = await DynamiceuMpt3L.echidna_test.call({from: accounts[3]});
		const boolXBHlgSU = await DynamiceuMpt3L.yolo.call(uint9g4EUj, stringXoKfARs, uinteMEAXoz, {from: accounts[4]});
		const boolsvcSYkg = await DynamiceuMpt3L.yolo.call(uintpnh3dB3, stringXhUVi5W, uintQNbIlh0, {from: accounts[3]});
		const boolMNwqj2H = await DynamiceuMpt3L.yolo.call(uinttDedPDc, stringMbM0Mfa, uintbjtNt0E, {from: accounts[3]});
	});
})