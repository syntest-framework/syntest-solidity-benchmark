const Rootkit_finance = artifacts.require("Rootkit_finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rootkit_finance', (accounts) => {
	it('test for Rootkit_finance', async () => {
		const Rootkit_financePXxMKXV = await Rootkit_finance.new({from: accounts[0]});
		const uintRcYPdl3 = BigInt("1442")
		const addressGmdgJY6 = accounts[0]
		const uintgLowaA9 = BigInt("1436")
		const addressuw4AXuR = accounts[2]
		const addressgs6s4ks = accounts[1]
		const uintu22wvhd = BigInt("453")
		const addressPzoOb7A = accounts[4]
		const addressgOgT8AO = accounts[2]
		const addressAAvbbEz = accounts[3]
		const addressWpKKfhx = accounts[5]
		const boolo3XGukv = await Rootkit_financePXxMKXV.approve.call(addressGmdgJY6, uintRcYPdl3, {from: accounts[4]});
		const boolaLSdSZv = await Rootkit_financePXxMKXV.transferFrom.call(addressgs6s4ks, addressuw4AXuR, uintgLowaA9, {from: "0x0000000000000000000000000000000000000001"});
		const boolWYnsU0C = await Rootkit_financePXxMKXV.transferFrom.call(addressgOgT8AO, addressPzoOb7A, uintu22wvhd, {from: "0x0000000000000000000000000000000000000001"});
		const uintj11E1Gk = await Rootkit_financePXxMKXV.allowance.call(addressWpKKfhx, addressAAvbbEz, {from: accounts[4]});

		assert.equal(boolWYnsU0C, false)
		assert.equal(boolaLSdSZv, false)
		assert.equal(boolo3XGukv, true)
		assert.equal(uintj11E1Gk, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeYemHUQb = await Rootkit_finance.new({from: accounts[2]});
		const addressuptJyXM = accounts[0]
		const addressvXE2hRx = "0x0000000000000000000000000000000000000001"
		const uintOVW6KlI = BigInt("745")
		const addressQgAj5Pg = accounts[1]
		const addressF8wIcQz = "0x0000000000000000000000000000000000000001"
		const uintx601W6k = BigInt("161")
		const addressR2CFIXa = accounts[4]
		const addresslVZYmyv = accounts[3]
		const uintbc12uMt = await Rootkit_financeYemHUQb.allowance.call(addressvXE2hRx, addressuptJyXM, {from: accounts[2]});
		const boolLwNDlCy = await Rootkit_financeYemHUQb.transferFrom.call(addressF8wIcQz, addressQgAj5Pg, uintOVW6KlI, {from: accounts[0]});
		const uint256qUyI5E6 = await Rootkit_financeYemHUQb.totalSupply.call({from: accounts[2]});
		const boolWotsJF = await Rootkit_financeYemHUQb.approve.call(addressR2CFIXa, uintx601W6k, {from: accounts[4]});
		const uint256pEq9M52 = await Rootkit_financeYemHUQb.balanceOf.call(addresslVZYmyv, {from: accounts[3]});

		assert.equal(boolLwNDlCy, false)
		assert.equal(boolWotsJF, true)
		assert.equal(uint256pEq9M52, BigInt("0"))
		assert.equal(uint256qUyI5E6, BigInt("10000000000000000000000"))
		assert.equal(uintbc12uMt, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeDbTBTh = await Rootkit_finance.new({from: "0x0000000000000000000000000000000000000001"});
		const addressRmmHimm = accounts[2]
		const uintBneaN88 = BigInt("1204")
		const addressG2rUx95 = accounts[1]
		const uintLy0Rmu = BigInt("1621")
		const addressddxV39Z = accounts[0]
		const addressMa6SyIi = accounts[0]
		const uint256Otazhj7 = await Rootkit_financeDbTBTh.balanceOf.call(addressRmmHimm, {from: accounts[3]});
		const boolKgUW2ZV = await Rootkit_financeDbTBTh.transfer.call(addressG2rUx95, uintBneaN88, {from: accounts[3]});
		const boolqTFoPDZ = await Rootkit_financeDbTBTh.approve.call(addressddxV39Z, uintLy0Rmu, {from: accounts[1]});
		const uint256TQJrTA = await Rootkit_financeDbTBTh.balanceOf.call(addressMa6SyIi, {from: accounts[2]});
		const uint256rME9vAG = await Rootkit_financeDbTBTh.totalSupply.call({from: accounts[3]});
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeTomUyCH = await Rootkit_finance.new({from: accounts[2]});
		const addressZeuYLv = accounts[0]
		const uintgioy90q = BigInt("520")
		const addressJNd1Tyy = accounts[4]
		const uintAk22EtO = BigInt("1330")
		const addressvTH3dCk = accounts[1]
		const addressIUJggML = "0x0000000000000000000000000000000000000001"
		const addressWgabvP = accounts[0]
		const addressZ8cUKkq = accounts[1]
		const uint256SRkLMkx = await Rootkit_financeTomUyCH.balanceOf.call(addressZeuYLv, {from: accounts[1]});
		const boolGY8PWmQ = await Rootkit_financeTomUyCH.transfer.call(addressJNd1Tyy, uintgioy90q, {from: accounts[0]});
		const uint256X2A6pYP = await Rootkit_financeTomUyCH.totalSupply.call({from: accounts[3]});
		const boolShxn9Wp = await Rootkit_financeTomUyCH.transferFrom.call(addressIUJggML, addressvTH3dCk, uintAk22EtO, {from: "0x0000000000000000000000000000000000000001"});
		const uintFE39t3p = await Rootkit_financeTomUyCH.allowance.call(addressZ8cUKkq, addressWgabvP, {from: accounts[3]});

		assert.equal(boolGY8PWmQ, false)
		assert.equal(boolShxn9Wp, false)
		assert.equal(uint256SRkLMkx, BigInt("0"))
		assert.equal(uint256X2A6pYP, BigInt("10000000000000000000000"))
		assert.equal(uintFE39t3p, BigInt("0"))
	});
})