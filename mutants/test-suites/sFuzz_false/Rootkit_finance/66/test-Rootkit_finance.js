const Rootkit_finance = artifacts.require("Rootkit_finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rootkit_finance', (accounts) => {
	it('test for Rootkit_finance', async () => {
		const Rootkit_financeI58Mcil = await Rootkit_finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintv5KZUsl = BigInt("1874")
		const addressJlsSW9 = accounts[1]
		const addressEq2DTgv = accounts[5]
		const uintOQClD6V = BigInt("270")
		const addressClwdbaJ = accounts[0]
		const addressD85BD0R = accounts[3]
		const addressuTlpk2 = accounts[3]
		const addresslr3CDoD = accounts[4]
		const uintbfIHoQK = BigInt("1394")
		const addressMTuFPbm = accounts[1]
		const bool7uY50M = await Rootkit_financeI58Mcil.transferFrom.call(addressEq2DTgv, addressJlsSW9, uintv5KZUsl, {from: accounts[5]});
		const boolmCQDsmi = await Rootkit_financeI58Mcil.transferFrom.call(addressD85BD0R, addressClwdbaJ, uintOQClD6V, {from: accounts[5]});
		const uintsl71JBU = await Rootkit_financeI58Mcil.allowance.call(addresslr3CDoD, addressuTlpk2, {from: accounts[1]});
		const boolouhGDJ2 = await Rootkit_financeI58Mcil.approve.call(addressMTuFPbm, uintbfIHoQK, {from: accounts[4]});
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeUO2lrZw = await Rootkit_finance.new({from: accounts[2]});
		const uintiN5HJVQ = BigInt("2026")
		const addressuiVdMDR = accounts[0]
		const addressJvTuPz9 = accounts[0]
		const uintPDyRJB8 = BigInt("2001")
		const addressUsBfaK = accounts[0]
		const addressfx09ouW = accounts[5]
		const addressKaLcE9x = accounts[0]
		const uintlo1LzA4 = BigInt("333")
		const addressNMHqGhg = "0x0000000000000000000000000000000000000001"
		const uints6HTnNh = BigInt("669")
		const address8jYjbf = accounts[2]
		const booliNmtNtQ = await Rootkit_financeUO2lrZw.transferFrom.call(addressJvTuPz9, addressuiVdMDR, uintiN5HJVQ, {from: accounts[3]});
		const boolOx7x1pc = await Rootkit_financeUO2lrZw.transfer.call(addressUsBfaK, uintPDyRJB8, {from: accounts[3]});
		const uintgcluKNE = await Rootkit_financeUO2lrZw.allowance.call(addressKaLcE9x, addressfx09ouW, {from: "0x0000000000000000000000000000000000000001"});
		const boolJ1clYaG = await Rootkit_financeUO2lrZw.transfer.call(addressNMHqGhg, uintlo1LzA4, {from: "0x0000000000000000000000000000000000000001"});
		const boolqb094Nf = await Rootkit_financeUO2lrZw.transfer.call(address8jYjbf, uints6HTnNh, {from: accounts[1]});

		assert.equal(boolJ1clYaG, false)
		assert.equal(boolOx7x1pc, false)
		assert.equal(booliNmtNtQ, false)
		assert.equal(boolqb094Nf, false)
		assert.equal(uintgcluKNE, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeEVudUXl = await Rootkit_finance.new({from: accounts[3]});
		const addressgyPMXLg = accounts[4]
		const addressnse7qg = accounts[2]
		const uintIWjJ1Ep = BigInt("717")
		const addressssms1w2 = accounts[4]
		const uintOjH40Mq = BigInt("911")
		const addressr60tzI = accounts[1]
		const uintq9LXrYV = await Rootkit_financeEVudUXl.allowance.call(addressnse7qg, addressgyPMXLg, {from: accounts[0]});
		const uint256oPL8sYW = await Rootkit_financeEVudUXl.totalSupply.call({from: accounts[1]});
		const boolhgQa2No = await Rootkit_financeEVudUXl.approve.call(addressssms1w2, uintIWjJ1Ep, {from: accounts[3]});
		const booluSgRmd7 = await Rootkit_financeEVudUXl.approve.call(addressr60tzI, uintOjH40Mq, {from: accounts[1]});

		assert.equal(boolhgQa2No, true)
		assert.equal(booluSgRmd7, true)
		assert.equal(uint256oPL8sYW, BigInt("10000000000000000000000"))
		assert.equal(uintq9LXrYV, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeJgQvEms = await Rootkit_finance.new({from: accounts[4]});
		const uintrqtFoN1 = BigInt("270")
		const addressdyVUJf = accounts[3]
		const addressTgIawCr = accounts[2]
		const uintmbhoeYU = BigInt("800")
		const addressUAkpfEj = accounts[1]
		const addresslwWzVdM = accounts[5]
		const addressDG0tA65 = accounts[0]
		const uint256fegJ0dl = await Rootkit_financeJgQvEms.totalSupply.call({from: accounts[1]});
		const boolHaSZxGt = await Rootkit_financeJgQvEms.transferFrom.call(addressTgIawCr, addressdyVUJf, uintrqtFoN1, {from: accounts[4]});
		const boolnVVjMlU = await Rootkit_financeJgQvEms.transferFrom.call(addresslwWzVdM, addressUAkpfEj, uintmbhoeYU, {from: accounts[0]});
		const uint256ivizrTT = await Rootkit_financeJgQvEms.balanceOf.call(addressDG0tA65, {from: accounts[3]});

		assert.equal(boolHaSZxGt, false)
		assert.equal(boolnVVjMlU, false)
		assert.equal(uint256fegJ0dl, BigInt("10000000000000000000000"))
		assert.equal(uint256ivizrTT, BigInt("0"))
	});
})