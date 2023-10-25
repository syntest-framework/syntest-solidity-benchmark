const DmmControllerV2 = artifacts.require("DmmControllerV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DmmControllerV2', (accounts) => {
	it('test for DmmControllerV2', async () => {
		const addressuIXzNmH = accounts[4]
		const addressyhFZRP = accounts[1]
		const addressSzGVuT = accounts[4]
		const addresswt8WXVJ = accounts[1]
		const addressm84Lw49 = accounts[0]
		const addressNaCnvjk = accounts[3]
		const addressEb7bMyb = accounts[5]
		const addressJII5Yib = accounts[3]
		const addresstoyGh0P = accounts[0]
		const uintFJwO1n = BigInt("356")
		const uintcCB2gV = BigInt("1475")
		const addressFpq1e8p = accounts[2]
		const DmmControllerV2TOhDOJ = await DmmControllerV2.new(addressuIXzNmH, addressyhFZRP, addressSzGVuT, addresswt8WXVJ, addressm84Lw49, addressNaCnvjk, addressEb7bMyb, addressJII5Yib, addresstoyGh0P, uintFJwO1n, uintcCB2gV, addressFpq1e8p, {from: accounts[4]});
		const addressLh1eRo = accounts[1]
		const addressf8FD6qY = accounts[0]
		const addressJDSVf5H = await DmmControllerV2TOhDOJ.getUnderlyingTokenForDmm.call(addressLh1eRo, {from: accounts[3]});
		await DmmControllerV2TOhDOJ.requireIsFromAssetIntroducer.call({from: accounts[3]});
		await DmmControllerV2TOhDOJ.renounceOwnership.call({from: accounts[0]});
		await DmmControllerV2TOhDOJ.requireIsStakingPurchaser.call({from: accounts[3]});
		await DmmControllerV2TOhDOJ.initializer.call({from: accounts[4]});
		const boolCutE3t9 = await DmmControllerV2TOhDOJ.isMarketEnabledByDmmTokenAddress.call(addressf8FD6qY, {from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addressotCqX2E = accounts[4]
		const addresstvtmN0W = "0x0000000000000000000000000000000000000001"
		const addressO51Txla = accounts[3]
		const addressleSuTJ8 = accounts[2]
		const addressDghab95 = accounts[3]
		const addresswlvafy = accounts[5]
		const addressETEZA01 = accounts[4]
		const addressOwiAm39 = accounts[3]
		const addressUY3QYlx = "0x0000000000000000000000000000000000000001"
		const uintwUYaSzx = BigInt("1550")
		const uintJVdy53n = BigInt("1557")
		const addressgMPI7Y0 = accounts[5]
		const DmmControllerV2sypLQvR = await DmmControllerV2.new(addressotCqX2E, addresstvtmN0W, addressO51Txla, addressleSuTJ8, addressDghab95, addresswlvafy, addressETEZA01, addressOwiAm39, addressUY3QYlx, uintwUYaSzx, uintJVdy53n, addressgMPI7Y0, {from: accounts[3]});
		const addressrTbJjUL = accounts[3]
		const uintW9N0rmu = BigInt("257")
		const uintxcNW2cq = BigInt("543")
		const uintNOeXkBP = BigInt("899")
		const uintEZpol7D = BigInt("247")
		const stringgEa21cC = "sv86QIAsojHhQvQOmbqbVRCgTcykc2KhzeX1JA2Xi"
		const stringkTlKQe = "eWC"
		const addressfEKH6jn = accounts[2]
		const uintg257MC4 = BigInt("1967")
		const uintTGgBNIW = BigInt("575")
		const uintDjw075W = BigInt("1132")
		const uintFdoxMnj = BigInt("54")
		const stringjaxIcAo = "TfgryI23sRmASCKm7jTs595ryCi3BUmZYsXEfmc3BZhQHOMcgZOUQGQdRuCTkLsnjE2lEXg6jVXdWmxMYt"
		const stringwDQUtud = "ju8WMO03uQlQkYCcniN9pUVb7EWvJlvBR0cdOGyDuTk"
		const addresszeJzSbM = accounts[4]
		const uintM7G4uuk = BigInt("1624")
		const addresst3ofjNg = accounts[3]
		const addressEWkqd1N = await DmmControllerV2sypLQvR.checkNotBlacklisted.call(addressrTbJjUL, {from: accounts[4]});
		const 
JXxQ85x = await DmmControllerV2sypLQvR.addMarket.call(addressfEKH6jn, stringkTlKQe, stringgEa21cC, uintEZpol7D, uintNOeXkBP, uintxcNW2cq, uintW9N0rmu, {from: accounts[3]});
		const 
jgyyEXm = await DmmControllerV2sypLQvR.addMarket.call(addresszeJzSbM, stringwDQUtud, stringjaxIcAo, uintFdoxMnj, uintDjw075W, uintTGgBNIW, uintg257MC4, {from: accounts[5]});
		const uintRNUCmUP = await DmmControllerV2sypLQvR.getInterestRateByDmmTokenId.call(uintM7G4uuk, {from: accounts[3]});
		const uintmzARp72 = await DmmControllerV2sypLQvR.getTokenIdFromDmmTokenAddress.call(addresst3ofjNg, {from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const DmmControllerV2HdPMOfA = await DmmControllerV2.new({from: accounts[4]});
		const addressNONZBuE = accounts[2]
		const addressn8UfdVR = accounts[4]
		const addressXgzQ229 = accounts[2]
		const uintuov0i5 = BigInt("1012")
		const addressMJDhKdm = accounts[1]
		const uintNYO4fmP = await DmmControllerV2HdPMOfA.getExchangeRateByUnderlying.call(addressNONZBuE, {from: accounts[0]});
		const address0RTJQ7 = await DmmControllerV2HdPMOfA.setOffChainCurrencyValuator.call(addressn8UfdVR, {from: accounts[3]});
		const 
nXdB682 = await DmmControllerV2HdPMOfA.setCollateralizationCalculator.call(addressXgzQ229, {from: accounts[3]});
		const addressAznjobn = await DmmControllerV2HdPMOfA.owner.call({from: accounts[3]});
		const boolVojfems = await DmmControllerV2HdPMOfA.isMarketEnabledByDmmTokenId.call(uintuov0i5, {from: accounts[3]});
		const boolmDvTnZE = await DmmControllerV2HdPMOfA.isBlacklisted.call(addressMJDhKdm, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for DmmControllerV2', async () => {
		const addresss1zNFl9 = accounts[2]
		const addressdFdvkR7 = accounts[1]
		const addressnPvGt1K = "0x0000000000000000000000000000000000000001"
		const addressf0VpTBs = accounts[1]
		const addressJpNfX7m = accounts[2]
		const addressg43v78F = accounts[1]
		const addresscMuFrtF = accounts[5]
		const addressfQ4uws = accounts[0]
		const addressre7fTJ = accounts[3]
		const uintRrsy58Z = BigInt("402")
		const uintmmErqKM = BigInt("1435")
		const addressgoj6MLU = accounts[0]
		const DmmControllerV2sp1R4N = await DmmControllerV2.new(addresss1zNFl9, addressdFdvkR7, addressnPvGt1K, addressf0VpTBs, addressJpNfX7m, addressg43v78F, addresscMuFrtF, addressfQ4uws, addressre7fTJ, uintRrsy58Z, uintmmErqKM, addressgoj6MLU, {from: accounts[0]});
		const addressuqdFykr = accounts[0]
		const uintU15Aeh = BigInt("1818")
		const addressqoztHnX = await DmmControllerV2sp1R4N.setDmmTokenFactory.call(addressuqdFykr, {from: accounts[3]});
		const addressctxU6ck = await DmmControllerV2sp1R4N.getDmmTokenAddressByDmmTokenId.call(uintU15Aeh, {from: accounts[3]});
		await DmmControllerV2sp1R4N.unpause.call({from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addresso8NgvnQ = accounts[4]
		const addressTl3eRUx = "0x0000000000000000000000000000000000000001"
		const addressDoWQ1DN = accounts[3]
		const addressvpOU3ZA = accounts[2]
		const addressfMh3ov = accounts[3]
		const addressXlp9A12 = accounts[5]
		const addressNnukIKZ = accounts[4]
		const addressmkkHHI7 = accounts[3]
		const addressLxxKOHN = "0x0000000000000000000000000000000000000001"
		const uintENDIEh1 = BigInt("1550")
		const uinti9E36lU = BigInt("1557")
		const addressJ8syZG = accounts[5]
		const DmmControllerV2sypLQvR = await DmmControllerV2.new(addresso8NgvnQ, addressTl3eRUx, addressDoWQ1DN, addressvpOU3ZA, addressfMh3ov, addressXlp9A12, addressNnukIKZ, addressmkkHHI7, addressLxxKOHN, uintENDIEh1, uinti9E36lU, addressJ8syZG, {from: accounts[3]});
		const addresssU1gsgK = accounts[3]
		const uintN8atN4p = BigInt("253")
		const uintjMvFhUj = BigInt("543")
		const uintD33z75 = BigInt("899")
		const uintvonXzz6 = BigInt("247")
		const stringgEa21cC = "sv86QIAsojHhQvQOmbqbVRCgTcykc2KhzeX1JA2Xi"
		const stringkTlKQe = "eWC"
		const addressPtE6ZCR = accounts[2]
		const uintTyxAJaL = BigInt("1967")
		const uintQjiIfY = BigInt("575")
		const uintleRG99U = BigInt("1132")
		const uintAo4kqv = BigInt("54")
		const stringjaxIcAo = "TfgryI23sRmASCKm7jTs595ryCi3BUmZYsXEfmc3BZhQHOMcgZOUQGQdRuCTkLsnjE2lEXg6jVXdWmxMYt"
		const stringwDQUtud = "ju8WMO03uQlQkYCcniN9pUVb7EWvJlvBR0cdOGyDuTk"
		const addresssyL9jiz = accounts[4]
		const uintINm8UQT = BigInt("1624")
		const addressmDGprBt = accounts[3]
		const uintP2WMlq1 = await DmmControllerV2sypLQvR.getTotalCollateralization.call({from: accounts[3]});
		const addressEWkqd1N = await DmmControllerV2sypLQvR.checkNotBlacklisted.call(addresssU1gsgK, {from: accounts[4]});
		const 
JXxQ85x = await DmmControllerV2sypLQvR.addMarket.call(addressPtE6ZCR, stringkTlKQe, stringgEa21cC, uintvonXzz6, uintD33z75, uintjMvFhUj, uintN8atN4p, {from: accounts[3]});
		const 
jgyyEXm = await DmmControllerV2sypLQvR.addMarket.call(addresssyL9jiz, stringwDQUtud, stringjaxIcAo, uintAo4kqv, uintleRG99U, uintQjiIfY, uintTyxAJaL, {from: accounts[5]});
		const uintRNUCmUP = await DmmControllerV2sypLQvR.getInterestRateByDmmTokenId.call(uintINm8UQT, {from: accounts[3]});
		const uintmzARp72 = await DmmControllerV2sypLQvR.getTokenIdFromDmmTokenAddress.call(addressmDGprBt, {from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addressPyqPw6e = accounts[1]
		const addressMGzsogM = accounts[2]
		const addressGoGqua0 = accounts[0]
		const addressVg8Eh3 = accounts[0]
		const addresskJwhtgu = accounts[2]
		const addressK3OyAvC = accounts[0]
		const addressdQrThlD = accounts[0]
		const addressohUnnxi = accounts[4]
		const addressPLDbXF = accounts[2]
		const uintzYwlbBv = BigInt("576")
		const uintHQnnH6q = BigInt("2012")
		const addressqgpXoa1 = accounts[4]
		const DmmControllerV2ZzGIbsM = await DmmControllerV2.new(addressPyqPw6e, addressMGzsogM, addressGoGqua0, addressVg8Eh3, addresskJwhtgu, addressK3OyAvC, addressdQrThlD, addressohUnnxi, addressPLDbXF, uintzYwlbBv, uintHQnnH6q, addressqgpXoa1, {from: accounts[1]});
		const uintFbUtkx1 = await DmmControllerV2ZzGIbsM.getActiveCollateralization.call({from: accounts[5]});
		await DmmControllerV2ZzGIbsM.renounceGuardian.call({from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addresszArrOcG = accounts[1]
		const addressgPRQU2 = accounts[2]
		const addressUr7Eud4 = accounts[0]
		const addressqajKiaN = accounts[0]
		const addressRMJ4NML = accounts[2]
		const addressmytmUea = accounts[0]
		const addressbmx2XK = accounts[0]
		const addresskfRXdX7 = accounts[4]
		const addressVdQKILv = accounts[2]
		const uintD7ixyV = BigInt("576")
		const uintCSsfjho = BigInt("2012")
		const addresssEEhj3d = accounts[4]
		const DmmControllerV2ZzGIbsM = await DmmControllerV2.new(addresszArrOcG, addressgPRQU2, addressUr7Eud4, addressqajKiaN, addressRMJ4NML, addressmytmUea, addressbmx2XK, addresskfRXdX7, addressVdQKILv, uintD7ixyV, uintCSsfjho, addresssEEhj3d, {from: accounts[1]});
		const addressOM0Gx7 = accounts[2]
		const uintEkV5HpA = await DmmControllerV2ZzGIbsM.getExchangeRateByUnderlying.call(addressOM0Gx7, {from: accounts[1]});
		await DmmControllerV2ZzGIbsM.renounceGuardian.call({from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressPMP9yug = accounts[4]
		const addressQ9TOokA = accounts[1]
		const addressZPJDcQi = accounts[4]
		const addressaTdL98w = accounts[1]
		const addressxYX6d0N = accounts[0]
		const addressNn28B7O = accounts[3]
		const addressiJsLrmG = accounts[5]
		const addressumaLjE5 = accounts[3]
		const address1t5YGn = accounts[0]
		const uintfwTcOu3 = BigInt("356")
		const uintydjYOLI = BigInt("1475")
		const addressAiJXWc = accounts[2]
		const DmmControllerV2TOhDOJ = await DmmControllerV2.new(addressPMP9yug, addressQ9TOokA, addressZPJDcQi, addressaTdL98w, addressxYX6d0N, addressNn28B7O, addressiJsLrmG, addressumaLjE5, address1t5YGn, uintfwTcOu3, uintydjYOLI, addressAiJXWc, {from: accounts[4]});
		const uintnNtFCIM = BigInt("1450")
		const addressdD5z6b = accounts[1]
		const addressppfXMwW = accounts[0]
		const uintg5cfCVm = await DmmControllerV2TOhDOJ.setMinCollateralization.call(uintnNtFCIM, {from: accounts[4]});
		const addressJDSVf5H = await DmmControllerV2TOhDOJ.getUnderlyingTokenForDmm.call(addressdD5z6b, {from: accounts[3]});
		await DmmControllerV2TOhDOJ.requireIsFromAssetIntroducer.call({from: accounts[3]});
		await DmmControllerV2TOhDOJ.renounceOwnership.call({from: accounts[0]});
		await DmmControllerV2TOhDOJ.requireIsStakingPurchaser.call({from: accounts[3]});
		await DmmControllerV2TOhDOJ.initializer.call({from: accounts[4]});
		const boolCutE3t9 = await DmmControllerV2TOhDOJ.isMarketEnabledByDmmTokenAddress.call(addressppfXMwW, {from: accounts[3]});
		await DmmControllerV2TOhDOJ.requireIsFromAssetIntroducer.call({from: accounts[4]});
	});
})