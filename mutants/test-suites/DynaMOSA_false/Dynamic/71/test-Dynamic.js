const Dynamic = artifacts.require("Dynamic");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dynamic', (accounts) => {
	it('test for Dynamic', async () => {
		const Dynamic3gfUfr = await Dynamic.new({from: accounts[1]});
		const uinte0EpkNu = BigInt("561")
		const stringvD99Afc = "Dgxy755PNj5Q3oF9rj1U1TyewCDjbP9cLdcgdr6rvdrOuT1Aze1XyfHZu2vOZDwEW"
		const uintvJTer8O = BigInt("915")
		const boolcEfaLLY = await Dynamic3gfUfr.echidna_test.call({from: accounts[3]});
		const boolmddYl9p = await Dynamic3gfUfr.echidna_test.call({from: accounts[3]});
		const boolIlZlDmj = await Dynamic3gfUfr.echidna_test.call({from: accounts[0]});
		const booltzzlPHe = await Dynamic3gfUfr.echidna_test.call({from: accounts[1]});
		const boolT0uQCZL = await Dynamic3gfUfr.yolo.call(uintvJTer8O, stringvD99Afc, uinte0EpkNu, {from: accounts[0]});

		assert.equal(boolIlZlDmj, true)
		assert.equal(boolT0uQCZL, true)
		assert.equal(boolcEfaLLY, true)
		assert.equal(boolmddYl9p, true)
		assert.equal(booltzzlPHe, true)
	});

	it('test for Dynamic', async () => {
		const DynamicYUsyLbR = await Dynamic.new({from: "0x0000000000000000000000000000000000000001"});
		const uintDP5JCpF = BigInt("2018")
		const stringhoPNjRa = "sEBSt86cIKt04GcCioL4FzZcVVVm5r"
		const uintJoY3P2 = BigInt("882")
		const uintwSviWNN = BigInt("125")
		const stringeFpK67I = "B9BkhmKicbhwWKOYzqvyBGzxCaKoqn5Fxl15qzUGeWUMJV8fVly8LgH6EDkxfLKF"
		const uintfYbEHpq = BigInt("1680")
		const boolwWpWAH3 = await DynamicYUsyLbR.yolo.call(uintJoY3P2, stringhoPNjRa, uintDP5JCpF, {from: accounts[0]});
		const boolPFRlaac = await DynamicYUsyLbR.yolo.call(uintfYbEHpq, stringeFpK67I, uintwSviWNN, {from: accounts[0]});
		const boolC0rTKEl = await DynamicYUsyLbR.echidna_test.call({from: accounts[2]});
		const boolCyZZOz3 = await DynamicYUsyLbR.echidna_test.call({from: accounts[1]});
		const boolIyrTs5A = await DynamicYUsyLbR.echidna_test.call({from: accounts[2]});
	});
})