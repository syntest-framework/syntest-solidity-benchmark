const BTCParamV2 = artifacts.require("BTCParamV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BTCParamV2', (accounts) => {
	it('test for BTCParamV2', async () => {
		const BTCParamV2ZRT4QEC = await BTCParamV2.new({from: accounts[4]});
		const addressmWoVRKJ = accounts[5]
		const uintkplDMF = BigInt("1174")
		const uintB7fu4u = BigInt("519")
		await BTCParamV2ZRT4QEC.onlyOwner.call({from: accounts[5]});
		const boole6DZ9d = await BTCParamV2ZRT4QEC.removeListener.call(addressmWoVRKJ, {from: accounts[4]});
		const uint256JH0WTFN = await BTCParamV2ZRT4QEC.setBtcBlockReward.call(uintkplDMF, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Xk9FnSU = await BTCParamV2ZRT4QEC.setBtcNetDiff.call(uintB7fu4u, {from: accounts[0]});

		await expect(BTCParamV2ZRT4QEC.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2oLdGUsO = await BTCParamV2.new({from: accounts[1]});
		const addresshviKKO0 = accounts[5]
		const addressenzwPHr = accounts[4]
		const addressnS4lpvu = accounts[0]
		const boolGYLpHYC = await BTCParamV2oLdGUsO.removeListener.call(addresshviKKO0, {from: accounts[3]});
		const uint256NTOeOPC = await BTCParamV2oLdGUsO.btcPrice.call({from: accounts[1]});
		const addressFFI4CAW = await BTCParamV2oLdGUsO.transferOwnership.call(addressenzwPHr, {from: accounts[4]});
		const addressqluiqg = await BTCParamV2oLdGUsO.addListener.call(addressnS4lpvu, {from: accounts[4]});

		await expect(BTCParamV2oLdGUsO.removeListener.call(addresshviKKO0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV24DRFHE = await BTCParamV2.new({from: accounts[0]});
		const boolojE3dwT = true
		const address8t3cgn = accounts[3]
		const uintf716HM = BigInt("442")
		const uintJoSCfgk = BigInt("1874")
		const addressIRNqaSn = accounts[2]
		const addressxQDpVqZ = accounts[4]
		const uintKbgmwLd = BigInt("679")
		const uintsVsbEK8 = BigInt("940")
		const addressSrx31Nt = await BTCParamV24DRFHE.initialize.call(addressxQDpVqZ, addressIRNqaSn, uintJoSCfgk, uintf716HM, address8t3cgn, boolojE3dwT, {from: accounts[2]});
		const uint256We6EH5d = await BTCParamV24DRFHE.setBtcBlockReward.call(uintKbgmwLd, {from: accounts[2]});
		const uint256OMCzyG5 = await BTCParamV24DRFHE.setBtcTxFeeRewardRate.call(uintsVsbEK8, {from: accounts[2]});

		await expect(BTCParamV24DRFHE.initialize.call(addressxQDpVqZ, addressIRNqaSn, uintJoSCfgk, uintf716HM, address8t3cgn, boolojE3dwT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2eYOhLV9 = await BTCParamV2.new({from: accounts[4]});
		const addresslCnQVO4 = accounts[1]
		const addresstMOYFj7 = accounts[1]
		const addressEPBiCJI = await BTCParamV2eYOhLV9.transferOwnership.call(addresslCnQVO4, {from: accounts[3]});
		await BTCParamV2eYOhLV9.onlyOwner.call({from: accounts[1]});
		const addressOHAZXYN = await BTCParamV2eYOhLV9.transferOwnership.call(addresstMOYFj7, {from: accounts[0]});
		const uint256YKveI85 = await BTCParamV2eYOhLV9.btcPrice.call({from: accounts[4]});

		await expect(BTCParamV2eYOhLV9.transferOwnership.call(addresslCnQVO4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2jT5NEbE = await BTCParamV2.new({from: accounts[0]});
		const uintN4EQie6 = BigInt("1741")
		const uint256JlQWTK1 = await BTCParamV2jT5NEbE.btcIncomePerTPerSecInWei.call({from: "0x0000000000000000000000000000000000000001"});
		const uint2567K1SzY = await BTCParamV2jT5NEbE.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintN4EQie6, {from: accounts[2]});

		await expect(BTCParamV2jT5NEbE.btcIncomePerTPerSecInWei.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2nco5zDi = await BTCParamV2.new({from: "0x0000000000000000000000000000000000000001"});
		const addresswmYH8xp = accounts[1]
		await BTCParamV2nco5zDi.onlyOwner.call({from: accounts[3]});
		const addresst0yUHZs = await BTCParamV2nco5zDi.addListener.call(addresswmYH8xp, {from: accounts[2]});
		const uint256f73uSAv = await BTCParamV2nco5zDi.btcIncomePerTPerSecInWei.call({from: accounts[0]});
		await BTCParamV2nco5zDi.onlyOwner.call({from: accounts[0]});
		const uint256pATBpl8 = await BTCParamV2nco5zDi.btcPrice.call({from: accounts[4]});
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2kGGygKT = await BTCParamV2.new({from: accounts[0]});
		const uintyWI432N = BigInt("1871")
		const uintUQoksSl = BigInt("227")
		const addressrGYrKHp = accounts[0]
		const uint256OeGuCtW = await BTCParamV2kGGygKT.btcPrice.call({from: accounts[3]});
		const uint256MdweMBr = await BTCParamV2kGGygKT.setBtcBlockReward.call(uintyWI432N, {from: accounts[2]});
		const uint256xdyiydv = await BTCParamV2kGGygKT.setBtcNetDiff.call(uintUQoksSl, {from: accounts[1]});
		const address29tVkE = await BTCParamV2kGGygKT.addListener.call(addressrGYrKHp, {from: accounts[4]});

		assert.equal(uint256OeGuCtW, BigInt("0"))
		await expect(BTCParamV2kGGygKT.setBtcBlockReward.call(uintyWI432N, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})