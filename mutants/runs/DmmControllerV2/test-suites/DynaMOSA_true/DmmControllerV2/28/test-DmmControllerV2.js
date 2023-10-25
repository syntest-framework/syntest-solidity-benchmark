const DmmControllerV2 = artifacts.require("DmmControllerV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DmmControllerV2', (accounts) => {
	it('test for DmmControllerV2', async () => {
		const DmmControllerV2n9L1vI = await DmmControllerV2.new({from: accounts[4]});
		const addressYqVs1C7 = accounts[0]
		const addresskfklhwc = accounts[1]
		const addressO9RQ3E5 = accounts[4]
		const addressh8DjWhs = "0x0000000000000000000000000000000000000001"
		const addressuyhxM4 = await DmmControllerV2n9L1vI.setDmmEtherFactory.call(addressYqVs1C7, {from: "0x0000000000000000000000000000000000000001"});
		const boolOq0PrXu = await DmmControllerV2n9L1vI.isBlacklisted.call(addresskfklhwc, {from: accounts[0]});
		const boolz7YDO7 = await DmmControllerV2n9L1vI.isPauser.call(addressO9RQ3E5, {from: accounts[2]});
		const addressPAR27m = await DmmControllerV2n9L1vI.getDmmTokenForUnderlying.call(addressh8DjWhs, {from: accounts[4]});
		await DmmControllerV2n9L1vI.renouncePauser.call({from: accounts[0]});
	});

	it('test for DmmControllerV2', async () => {
		const addressrsFhfWS = accounts[3]
		const addressZR57zJE = accounts[0]
		const addresskyUgvSR = accounts[3]
		const addressq4r7VUV = "0x0000000000000000000000000000000000000001"
		const addressNdW92T = accounts[0]
		const addressewUixZK = accounts[0]
		const addresspcOo8MQ = accounts[3]
		const addressoKPZ3c = accounts[4]
		const addressCgolo7d = accounts[0]
		const uintQA9xkfY = BigInt("1408")
		const uintUf92DKd = BigInt("609")
		const addressc4txu5t = accounts[3]
		const DmmControllerV2gQMVUNq = await DmmControllerV2.new(addressrsFhfWS, addressZR57zJE, addresskyUgvSR, addressq4r7VUV, addressNdW92T, addressewUixZK, addresspcOo8MQ, addressoKPZ3c, addressCgolo7d, uintQA9xkfY, uintUf92DKd, addressc4txu5t, {from: accounts[3]});
		const addressQPTAK0S = accounts[3]
		const addressaBldWNw = accounts[4]
		const uintxBiVOut = BigInt("48")
		const addresseDALm3a = await DmmControllerV2gQMVUNq.setDmmEtherFactory.call(addressQPTAK0S, {from: accounts[2]});
		await DmmControllerV2gQMVUNq.renounceOwnership.call({from: accounts[0]});
		const addressa90GdUW = await DmmControllerV2gQMVUNq.setDmmEtherFactory.call(addressaBldWNw, {from: accounts[2]});
		const addressUDzhs46 = await DmmControllerV2gQMVUNq.getDmmTokenAddressByDmmTokenId.call(uintxBiVOut, {from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addressGXhMaAU = accounts[3]
		const addresss3XoCst = accounts[1]
		const addressd7XcSoG = "0x0000000000000000000000000000000000000001"
		const addresskrJO0DM = accounts[1]
		const addressfOCQdAw = accounts[1]
		const addressNUcgIln = accounts[4]
		const addressjCHeptb = accounts[4]
		const addressA3JVAdX = accounts[3]
		const addressuSqSFc6 = "0x0000000000000000000000000000000000000001"
		const uintuCC4h7V = BigInt("1660")
		const uintqRfgvO1 = BigInt("906")
		const addressnc8zZQX = accounts[3]
		const DmmControllerV2hdTHJC9 = await DmmControllerV2.new(addressGXhMaAU, addresss3XoCst, addressd7XcSoG, addresskrJO0DM, addressfOCQdAw, addressNUcgIln, addressjCHeptb, addressA3JVAdX, addressuSqSFc6, uintuCC4h7V, uintqRfgvO1, addressnc8zZQX, {from: accounts[5]});
		const addresszu9gHw = accounts[3]
		const addresssLtew71 = accounts[3]
		await DmmControllerV2hdTHJC9.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await DmmControllerV2hdTHJC9.renounceGuardian.call({from: accounts[3]});
		const uintHMD6nT8 = await DmmControllerV2hdTHJC9.getInterestRateByUnderlyingTokenAddress.call(addresszu9gHw, {from: accounts[3]});
		const addressFsjJKr = await DmmControllerV2hdTHJC9.owner.call({from: accounts[2]});
		const addressEmLBqIB = await DmmControllerV2hdTHJC9.getDmmTokenForUnderlying.call(addresssLtew71, {from: accounts[2]});
		await DmmControllerV2hdTHJC9.renouncePauser.call({from: accounts[2]});
	});

	it('test for DmmControllerV2', async () => {
		const addressCGJzVxm = accounts[1]
		const addressH0nIiA8 = accounts[3]
		const addressUV2sAjG = accounts[2]
		const addressgUQvX7 = accounts[0]
		const addressOCpIS0s = accounts[2]
		const addresscTy9Sb = accounts[1]
		const addressMwvXAAu = accounts[4]
		const addressUdyrziT = accounts[4]
		const addressIpsNBB5 = "0x0000000000000000000000000000000000000001"
		const uintpNSsp5p = BigInt("1727")
		const uintroDJwJL = BigInt("425")
		const addressQ2571Sy = accounts[1]
		const DmmControllerV2BDkKQwI = await DmmControllerV2.new(addressCGJzVxm, addressH0nIiA8, addressUV2sAjG, addressgUQvX7, addressOCpIS0s, addresscTy9Sb, addressMwvXAAu, addressUdyrziT, addressIpsNBB5, uintpNSsp5p, uintroDJwJL, addressQ2571Sy, {from: "0x0000000000000000000000000000000000000001"});
		const uintOIkuSIj = BigInt("947")
		await DmmControllerV2BDkKQwI.nonReentrant.call({from: accounts[2]});
		await DmmControllerV2BDkKQwI.onlyOwnerOrGuardian.call({from: accounts[1]});
		const uintbd8IvgG = await DmmControllerV2BDkKQwI.requireIsValidNft.call(uintOIkuSIj, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for DmmControllerV2', async () => {
		const addressFvGcaVj = accounts[0]
		const addressPFcuOI = "0x0000000000000000000000000000000000000001"
		const addresszmmOec = accounts[4]
		const addressPhZhWlU = "0x0000000000000000000000000000000000000001"
		const address0NoJCG = accounts[0]
		const addressmXjzph8 = accounts[4]
		const addressjSojJyH = accounts[0]
		const addressWMizAVQ = accounts[1]
		const addressYEyD58M = accounts[3]
		const uintOszrwmG = BigInt("837")
		const uintGkBvtZB = BigInt("1244")
		const addressOke2cLG = accounts[0]
		const DmmControllerV2FStVoC1 = await DmmControllerV2.new(addressFvGcaVj, addressPFcuOI, addresszmmOec, addressPhZhWlU, address0NoJCG, addressmXjzph8, addressjSojJyH, addressWMizAVQ, addressYEyD58M, uintOszrwmG, uintGkBvtZB, addressOke2cLG, {from: accounts[2]});
		const addressCF3mKcp = accounts[2]
		const uintabpJYbw = BigInt("1196")
		const uintXXQNlcI = BigInt("1548")
		const addressHduJLEU = accounts[1]
		const booltKkx9yw = await DmmControllerV2FStVoC1.isPauser.call(addressCF3mKcp, {from: accounts[1]});
		const 
gt7B4nc = await DmmControllerV2FStVoC1.adminDepositFunds.call(uintXXQNlcI, uintabpJYbw, {from: accounts[2]});
		const 
JA0E0cw = await DmmControllerV2FStVoC1.transferOwnershipToNewController.call(addressHduJLEU, {from: accounts[4]});
	});
})