const DJCoin = artifacts.require("DJCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DJCoin', (accounts) => {
	it('test for DJCoin', async () => {
		const DJCoinQdXch4e = await DJCoin.new({from: accounts[0]});
		const addressooEnzyO = accounts[0]
		const address8tcCDo = accounts[5]
		const uintUULZpGa = BigInt("674")
		const addressxvmGOUk = accounts[0]
		const addressk5xhuHX = accounts[0]
//		const addressdVjoYEC = await DJCoinQdXch4e.transferOwnership.call(addressooEnzyO, {from: accounts[2]});
//		const addressZO5xo2M = await DJCoinQdXch4e.validRecipient.call(address8tcCDo, {from: accounts[2]});
//		const boolbewOvtV = await DJCoinQdXch4e.decreaseAllowance.call(addressxvmGOUk, uintUULZpGa, {from: accounts[2]});
//		const addressVYd2M4r = await DJCoinQdXch4e.validRecipient.call(addressk5xhuHX, {from: accounts[1]});

		await expect(DJCoinQdXch4e.transferOwnership.call(addressooEnzyO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoin2g39HQ = await DJCoin.new({from: accounts[5]});
		const uintofzC9xU = BigInt("645")
		const addresskzy4VR = "0x0000000000000000000000000000000000000001"
		const addressSRHbcC9 = accounts[0]
//		await DJCoin2g39HQ.onlyOwner.call({from: accounts[1]});
//		const boolZoqEDuR = await DJCoin2g39HQ.increaseAllowance.call(addresskzy4VR, uintofzC9xU, {from: accounts[5]});
//		const uint256o9ytrv = await DJCoin2g39HQ.balanceOf.call(addressSRHbcC9, {from: accounts[1]});
//		const uint256QS0XdZg = await DJCoin2g39HQ.totalSupply.call({from: accounts[2]});

		await expect(DJCoin2g39HQ.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinWpyAgbH = await DJCoin.new({from: accounts[3]});
		const uintTOoGqD = BigInt("427")
		const addressvrKWYuQ = accounts[4]
		const uintppbMb7y = BigInt("25")
		const uintCrr1MYh = BigInt("711")
		const uintN23qYJP = BigInt("391")
		const addressap25uR1 = accounts[3]
		const boolGD7FJDM = await DJCoinWpyAgbH.approve.call(addressvrKWYuQ, uintTOoGqD, {from: accounts[5]});
//		const uint256fZjxfzT = await DJCoinWpyAgbH.burn.call(uintCrr1MYh, uintppbMb7y, {from: accounts[2]});
//		const boolGejbl4d = await DJCoinWpyAgbH.decreaseAllowance.call(addressap25uR1, uintN23qYJP, {from: accounts[3]});

		assert.equal(boolGD7FJDM, true)
		await expect(DJCoinWpyAgbH.burn.call(uintCrr1MYh, uintppbMb7y, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinkEZmOqL = await DJCoin.new({from: accounts[0]});
		const addressczD5eU2 = accounts[3]
		const addressluNkLeB = accounts[4]
		const addressQp5aHvV = accounts[2]
		const uint256pfElz0o = await DJCoinkEZmOqL.balanceOf.call(addressczD5eU2, {from: accounts[0]});
		const uint256UElAiXR = await DJCoinkEZmOqL.allowance.call(addressQp5aHvV, addressluNkLeB, {from: accounts[3]});
//		await DJCoinkEZmOqL.renounceOwnership.call({from: accounts[5]});

		assert.equal(uint256UElAiXR, BigInt("0"))
		assert.equal(uint256pfElz0o, BigInt("0"))
		await expect(DJCoinkEZmOqL.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinTClO38I = await DJCoin.new({from: accounts[4]});
		const uintha276wW = BigInt("1961")
		const addressXSADAIm = accounts[0]
		const uintrofUFPU = BigInt("259")
		const addressfYROP3 = "0x0000000000000000000000000000000000000001"
		const uinthuFV1nC = BigInt("227")
		const addressFV17x7 = accounts[3]
		const addressNq40XyY = accounts[0]
		const boolDzt7DcZ = await DJCoinTClO38I.decreaseAllowance.call(addressXSADAIm, uintha276wW, {from: accounts[1]});
		const boolAvqu9P0 = await DJCoinTClO38I.approve.call(addressfYROP3, uintrofUFPU, {from: accounts[3]});
//		await DJCoinTClO38I.renounceOwnership.call({from: accounts[0]});
//		const boolq24SIKs = await DJCoinTClO38I.transferFrom.call(addressNq40XyY, addressFV17x7, uinthuFV1nC, {from: accounts[5]});

		assert.equal(boolAvqu9P0, true)
		assert.equal(boolDzt7DcZ, true)
		await expect(DJCoinTClO38I.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinTClO38I = await DJCoin.new({from: accounts[4]});
		const uintjfr7Seh = BigInt("227")
		const addressy0OnPR2 = accounts[3]
		const addressuZ4YWpQ = accounts[0]
//		const boolq24SIKs = await DJCoinTClO38I.transferFrom.call(addressuZ4YWpQ, addressy0OnPR2, uintjfr7Seh, {from: accounts[5]});

		await expect(DJCoinTClO38I.transferFrom.call(addressuZ4YWpQ, addressy0OnPR2, uintjfr7Seh, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinTClO38I = await DJCoin.new({from: accounts[4]});
		const uintzVu5Q5h = BigInt("227")
		const addressLyMJpyl = accounts[3]
		const addressrHH3prS = accounts[0]
		const uint256ZNW3ljp = await DJCoinTClO38I.totalSupply.call({from: accounts[0]});
//		const boolq24SIKs = await DJCoinTClO38I.transferFrom.call(addressrHH3prS, addressLyMJpyl, uintzVu5Q5h, {from: accounts[5]});

		assert.equal(uint256ZNW3ljp, BigInt("2100000000000"))
		await expect(DJCoinTClO38I.transferFrom.call(addressrHH3prS, addressLyMJpyl, uintzVu5Q5h, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinTClO38I = await DJCoin.new({from: accounts[4]});
		const uintEHBCXwX = BigInt("1666")
		const uintPbBnLpL = BigInt("227")
		const address2ks8Tb = accounts[3]
		const addresstOA0Tzt = accounts[0]
		const uintOoVPs7S = BigInt("1849")
		const uint3JbMdH = BigInt("258")
		const boolxtDoKid = await DJCoinTClO38I.changetokensPerBlock.call(uintEHBCXwX, {from: accounts[3]});
//		const boolq24SIKs = await DJCoinTClO38I.transferFrom.call(addresstOA0Tzt, address2ks8Tb, uintPbBnLpL, {from: accounts[5]});
//		const uint256XUjo302 = await DJCoinTClO38I.burn.call(uint3JbMdH, uintOoVPs7S, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolxtDoKid, true)
		await expect(DJCoinTClO38I.transferFrom.call(addresstOA0Tzt, address2ks8Tb, uintPbBnLpL, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinTClO38I = await DJCoin.new({from: accounts[4]});
		const uintgfD7VqE = BigInt("1237")
		const addressvr4vPB = accounts[0]
		const uintMIgFs1 = BigInt("227")
		const addressDBPWypF = accounts[4]
		const addressGUvUZtP = accounts[0]
//		const boolkPQypol = await DJCoinTClO38I.transfer.call(addressvr4vPB, uintgfD7VqE, {from: accounts[3]});
//		const boolq24SIKs = await DJCoinTClO38I.transferFrom.call(addressGUvUZtP, addressDBPWypF, uintMIgFs1, {from: accounts[5]});

		await expect(DJCoinTClO38I.transfer.call(addressvr4vPB, uintgfD7VqE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinTClO38I = await DJCoin.new({from: accounts[4]});
		const uintpx37wzk = BigInt("227")
		const addressvxJub3u = accounts[3]
		const addressrs8lX6k = accounts[1]
		const addresscTQaoDC = await DJCoinTClO38I.owner.call({from: accounts[1]});
//		const boolq24SIKs = await DJCoinTClO38I.transferFrom.call(addressrs8lX6k, addressvxJub3u, uintpx37wzk, {from: accounts[5]});

		assert.equal(addresscTQaoDC, 0x8a18562cBc05C2f1eC19e3a50712CE33245c5F07)
		await expect(DJCoinTClO38I.transferFrom.call(addressrs8lX6k, addressvxJub3u, uintpx37wzk, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinSXhs8DJ = await DJCoin.new({from: accounts[2]});
		const uintlYObzHj = BigInt("1479")
		const addressw51ICtJ = accounts[0]
		const uintHDjx7QY = BigInt("606")
		const addressFkkVJOY = accounts[1]
		const boolqhBTOCM = await DJCoinSXhs8DJ.increaseAllowance.call(addressw51ICtJ, uintlYObzHj, {from: accounts[0]});
		const boolyUfpz6 = await DJCoinSXhs8DJ.increaseAllowance.call(addressFkkVJOY, uintHDjx7QY, {from: accounts[4]});
//		await DJCoinSXhs8DJ.onlyOwner.call({from: accounts[4]});

		assert.equal(boolqhBTOCM, true)
		assert.equal(boolyUfpz6, true)
		await expect(DJCoinSXhs8DJ.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinJ8DIJnP = await DJCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const addresskBoTkC3 = accounts[4]
		const addressxc0e2kX = accounts[2]
		const uintyt6Ca1L = BigInt("791")
		const addresswNPaKS = accounts[3]
		const addresssiThOv8 = accounts[0]
		const addressxGxgVje = accounts[5]
		const addressi9dDlKc = await DJCoinJ8DIJnP.validRecipient.call(addresskBoTkC3, {from: accounts[2]});
		await DJCoinJ8DIJnP.renounceOwnership.call({from: accounts[2]});
		const address2eTUYa = await DJCoinJ8DIJnP.transferOwnership.call(addressxc0e2kX, {from: accounts[4]});
		const boolicw2pFH = await DJCoinJ8DIJnP.transferFrom.call(addresssiThOv8, addresswNPaKS, uintyt6Ca1L, {from: accounts[0]});
		const uint2565fXc9U = await DJCoinJ8DIJnP.totalSupply.call({from: accounts[2]});
		const addressGjYQQE = await DJCoinJ8DIJnP.transferOwnership.call(addressxGxgVje, {from: accounts[4]});
	});

	it('test for DJCoin', async () => {
		const DJCoinzPNsXgR = await DJCoin.new({from: accounts[4]});
		const addressfwN6PDb = accounts[5]
		const uintj3MO9h5 = BigInt("703")
		const addressUIZ6c3P = accounts[1]
		const uintasMMoA = BigInt("29")
		const addressWgI6Z8W = accounts[4]
		const addressO5d8pB = await DJCoinzPNsXgR.transferOwnership.call(addressfwN6PDb, {from: accounts[4]});
		const uint256Mh6pRcO = await DJCoinzPNsXgR.totalSupply.call({from: accounts[1]});
		const boolDbs0ue = await DJCoinzPNsXgR.increaseAllowance.call(addressUIZ6c3P, uintj3MO9h5, {from: accounts[5]});
		const boolJo0iroA = await DJCoinzPNsXgR.transfer.call(addressWgI6Z8W, uintasMMoA, {from: accounts[4]});

		assert.equal(boolDbs0ue, true)
		assert.equal(boolJo0iroA, true)
		assert.equal(uint256Mh6pRcO, BigInt("2100000000000"))
	});

	it('test for DJCoin', async () => {
		const DJCoinzPNsXgR = await DJCoin.new({from: accounts[4]});
		const uintPh2DMpP = BigInt("0")
		const addressdIPopR8 = accounts[4]
		const boolJo0iroA = await DJCoinzPNsXgR.transfer.call(addressdIPopR8, uintPh2DMpP, {from: accounts[4]});

		assert.equal(boolJo0iroA, true)
	});

	it('test for DJCoin', async () => {
		const DJCoinTClO38I = await DJCoin.new({from: accounts[4]});
		const uinth6lmt2 = BigInt("1646")
		const uinto8fLAp = BigInt("1503")
		const uintVxVe1HA = BigInt("1830")
		const addressSLirci8 = accounts[4]
		const addressqZy91ey = accounts[4]
		const uintcr6RRmo = BigInt("227")
		const addressyfpT0hH = accounts[4]
		const addressty6jRUY = accounts[0]
		const uint256q7LmMeU = await DJCoinTClO38I.burn.call(uinto8fLAp, uinth6lmt2, {from: accounts[4]});
//		const bool3BcXwn = await DJCoinTClO38I.transferFrom.call(addressqZy91ey, addressSLirci8, uintVxVe1HA, {from: accounts[1]});
//		const boolq24SIKs = await DJCoinTClO38I.transferFrom.call(addressty6jRUY, addressyfpT0hH, uintcr6RRmo, {from: accounts[5]});

		assert.equal(uint256q7LmMeU, BigInt("1754340000000"))
		await expect(DJCoinTClO38I.transferFrom.call(addressqZy91ey, addressSLirci8, uintVxVe1HA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinTClO38I = await DJCoin.new({from: accounts[4]});
		const uinthlQguXs = BigInt("227")
		const addressRN6Jer7 = accounts[4]
		const addressaaruz2M = accounts[0]
		const uintogs6zdF = BigInt("2008")
		const uintC9Yv5bH = BigInt("579")
//		await DJCoinTClO38I.renounceOwnership.call({from: accounts[4]});
//		const boolq24SIKs = await DJCoinTClO38I.transferFrom.call(addressaaruz2M, addressRN6Jer7, uinthlQguXs, {from: accounts[5]});
//		const uint256xCLSnDq = await DJCoinTClO38I.burn.call(uintC9Yv5bH, uintogs6zdF, {from: accounts[0]});

		await expect(DJCoinTClO38I.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})