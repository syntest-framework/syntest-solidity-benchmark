const Rootkit_finance = artifacts.require("Rootkit_finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rootkit_finance', (accounts) => {
	it('test for Rootkit_finance', async () => {
		const Rootkit_financewWiadrN = await Rootkit_finance.new({from: accounts[5]});
		const addresswQzu5h8 = accounts[2]
		const uint256eSFbdb = await Rootkit_financewWiadrN.totalSupply.call({from: accounts[5]});
		const uint256BhxJyn4 = await Rootkit_financewWiadrN.balanceOf.call(addresswQzu5h8, {from: accounts[3]});

		assert.equal(uint256BhxJyn4, BigInt("0"))
		assert.equal(uint256eSFbdb, BigInt("10000000000000000000000"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financetiA58hh = await Rootkit_finance.new({from: accounts[1]});
		const addressTGYJoDF = accounts[4]
		const addressvL4QhNN = accounts[0]
		const addressi39hN2l = accounts[0]
		const uintQbfmH0C = await Rootkit_financetiA58hh.allowance.call(addressvL4QhNN, addressTGYJoDF, {from: accounts[4]});
		const uint256qEd35CA = await Rootkit_financetiA58hh.balanceOf.call(addressi39hN2l, {from: accounts[0]});

		assert.equal(uint256qEd35CA, BigInt("0"))
		assert.equal(uintQbfmH0C, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financesSmO3K1 = await Rootkit_finance.new({from: accounts[4]});
		const addresshM3sesx = accounts[1]
		const addressKZ6G85o = accounts[0]
		const addressnS04sH = "0x0000000000000000000000000000000000000001"
		const addressJzna4ol = accounts[4]
		const uintR0UTord = BigInt("1181")
		const addressQCis2SP = accounts[2]
		const uintCvBSAnG = BigInt("75")
		const addressX6e3jA0 = accounts[2]
		const addressd0qC52h = accounts[0]
		const uintJt29GO = await Rootkit_financesSmO3K1.allowance.call(addressKZ6G85o, addresshM3sesx, {from: accounts[3]});
		const uintPsyepM5 = await Rootkit_financesSmO3K1.allowance.call(addressJzna4ol, addressnS04sH, {from: accounts[4]});
		const boolCeLixWa = await Rootkit_financesSmO3K1.transfer.call(addressQCis2SP, uintR0UTord, {from: accounts[5]});
		const boolFz161Sf = await Rootkit_financesSmO3K1.transferFrom.call(addressd0qC52h, addressX6e3jA0, uintCvBSAnG, {from: accounts[4]});
		const uint256DnHZxmj = await Rootkit_financesSmO3K1.totalSupply.call({from: accounts[4]});

		assert.equal(boolCeLixWa, false)
		assert.equal(boolFz161Sf, false)
		assert.equal(uint256DnHZxmj, BigInt("10000000000000000000000"))
		assert.equal(uintJt29GO, BigInt("0"))
		assert.equal(uintPsyepM5, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeCdflRhn = await Rootkit_finance.new({from: accounts[2]});
		const uintHCjY4yv = BigInt("446")
		const addressGgRcj2 = "0x0000000000000000000000000000000000000001"
		const addressWarsITp = accounts[0]
		const addressldPsDb0 = accounts[3]
		const uintEZaOq9P = BigInt("1171")
		const addressVMQYxb0 = accounts[3]
		const addressRThsGt7 = accounts[1]
		const uintArxBuTo = BigInt("1751")
		const addressOUeAIlE = accounts[3]
		const addressjsYZ98F = "0x0000000000000000000000000000000000000001"
		const addressd6PjIU = accounts[4]
		const uintAkIecPm = BigInt("209")
		const addressQVL9RH4 = accounts[2]
		const addressxesa7Wo = accounts[1]
		const boolN5hbhMd = await Rootkit_financeCdflRhn.transfer.call(addressGgRcj2, uintHCjY4yv, {from: "0x0000000000000000000000000000000000000001"});
		const uintNjRrLuo = await Rootkit_financeCdflRhn.allowance.call(addressldPsDb0, addressWarsITp, {from: accounts[0]});
		const boolLTsLGPx = await Rootkit_financeCdflRhn.transferFrom.call(addressRThsGt7, addressVMQYxb0, uintEZaOq9P, {from: accounts[0]});
		const boolf4NeS6G = await Rootkit_financeCdflRhn.approve.call(addressOUeAIlE, uintArxBuTo, {from: accounts[5]});
		const uintPLyYRx = await Rootkit_financeCdflRhn.allowance.call(addressd6PjIU, addressjsYZ98F, {from: accounts[0]});
		const boolNmsKcU = await Rootkit_financeCdflRhn.transferFrom.call(addressxesa7Wo, addressQVL9RH4, uintAkIecPm, {from: accounts[4]});

		assert.equal(boolLTsLGPx, false)
		assert.equal(boolN5hbhMd, false)
		assert.equal(boolNmsKcU, false)
		assert.equal(boolf4NeS6G, true)
		assert.equal(uintNjRrLuo, BigInt("0"))
		assert.equal(uintPLyYRx, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financep3uR1nh = await Rootkit_finance.new({from: "0x0000000000000000000000000000000000000001"});
		const addresspmWrxP = accounts[2]
		const addressJ3Hvr5h = accounts[2]
		const addresseQrrNUN = accounts[3]
		const uintDZPsZgX = BigInt("486")
		const addressAxcMK6I = accounts[2]
		const address5eLGwC = accounts[2]
		const uintFzhmxYe = BigInt("1095")
		const addressXTJ9xS = accounts[3]
		const addressNkKOXU8 = accounts[1]
		const uint256yj5y8AC = await Rootkit_financep3uR1nh.balanceOf.call(addresspmWrxP, {from: accounts[1]});
		const uintYWrOBu = await Rootkit_financep3uR1nh.allowance.call(addresseQrrNUN, addressJ3Hvr5h, {from: accounts[4]});
		const boolPYtUivd = await Rootkit_financep3uR1nh.transferFrom.call(address5eLGwC, addressAxcMK6I, uintDZPsZgX, {from: accounts[0]});
		const boolnMSEwH = await Rootkit_financep3uR1nh.transferFrom.call(addressNkKOXU8, addressXTJ9xS, uintFzhmxYe, {from: accounts[2]});
	});
})