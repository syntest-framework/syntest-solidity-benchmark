const DmmControllerV2 = artifacts.require("DmmControllerV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DmmControllerV2', (accounts) => {
	it('test for DmmControllerV2', async () => {
		const addressKQig18m = "0x0000000000000000000000000000000000000001"
		const addressgiht1CO = accounts[0]
		const addressSi7GzsO = accounts[5]
		const addressiUPT8Fu = accounts[1]
		const addressJkkUmk = accounts[0]
		const addressj6NUkT0 = accounts[3]
		const addressBGXLIpM = accounts[2]
		const addressFQbIW0W = accounts[3]
		const addressxEALH07 = accounts[2]
		const uintofAt24l = BigInt("1723")
		const uintSPFaD0U = BigInt("1442")
		const addresstZ8ZO1 = accounts[2]
		const DmmControllerV2EBXAs1y = await DmmControllerV2.new(addressKQig18m, addressgiht1CO, addressSi7GzsO, addressiUPT8Fu, addressJkkUmk, addressj6NUkT0, addressBGXLIpM, addressFQbIW0W, addressxEALH07, uintofAt24l, uintSPFaD0U, addresstZ8ZO1, {from: accounts[4]});
		const addressgXkstGd = accounts[1]
		const uintldcxsN = BigInt("983")
		const uintLRWldY = BigInt("693")
		const uintw4uLxC = BigInt("349")
		const uintTLlVffe = await DmmControllerV2EBXAs1y.getTotalCollateralization.call({from: accounts[4]});
		const addressAG1kevw = await DmmControllerV2EBXAs1y.notBlacklisted.call(addressgXkstGd, {from: accounts[1]});
		const uintHKLFjWH = await DmmControllerV2EBXAs1y.disableMarket.call(uintldcxsN, {from: accounts[3]});
		const 
B04ROxZ = await DmmControllerV2EBXAs1y.decreaseTotalSupply.call(uintw4uLxC, uintLRWldY, {from: accounts[0]});
		const uintrcGSB5H = await DmmControllerV2EBXAs1y.getActiveCollateralization.call({from: accounts[5]});
		const addressPBlY7nW = await DmmControllerV2EBXAs1y.owner.call({from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const DmmControllerV2M9o32w = await DmmControllerV2.new({from: accounts[4]});
		const addresst5NbRCR = "0x0000000000000000000000000000000000000001"
		const uintRpFDDoH = BigInt("198")
		const uintgqJMk87 = BigInt("195")
		const addresswjlY7eE = await DmmControllerV2M9o32w.getUnderlyingTokenForDmm.call(addresst5NbRCR, {from: accounts[1]});
		await DmmControllerV2M9o32w.onlyOwner.call({from: accounts[2]});
		const 
p7dgkce = await DmmControllerV2M9o32w.decreaseTotalSupply.call(uintgqJMk87, uintRpFDDoH, {from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addressUi6Ffdf = accounts[1]
		const addresswClmwls = accounts[3]
		const addressXc7llA = accounts[3]
		const addresszuGVNRW = accounts[0]
		const addressUZ9WvPC = accounts[2]
		const addressvCK6H2 = accounts[5]
		const addressSCF30Z = accounts[3]
		const addressH2T4mJe = accounts[0]
		const addressZsPFalA = accounts[0]
		const uintiwx1NWB = BigInt("708")
		const uintAyRA78z = BigInt("788")
		const addresst5k0Z1I = accounts[3]
		const DmmControllerV2Pn8Ze04 = await DmmControllerV2.new(addressUi6Ffdf, addresswClmwls, addressXc7llA, addresszuGVNRW, addressUZ9WvPC, addressvCK6H2, addressSCF30Z, addressH2T4mJe, addressZsPFalA, uintiwx1NWB, uintAyRA78z, addresst5k0Z1I, {from: accounts[4]});
		const uintZaCY6C = BigInt("487")
		const uintssUcWwh = BigInt("1382")
		const uintHvnjmsO = BigInt("1543")
		const uintyhGlJdD = BigInt("1216")
		await DmmControllerV2Pn8Ze04.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
		const uintqIp9fQ = await DmmControllerV2Pn8Ze04.requireIsPrimaryMarketNft.call(uintZaCY6C, {from: accounts[2]});
		const uintkWynYd = await DmmControllerV2Pn8Ze04.setMinReserveRatio.call(uintssUcWwh, {from: accounts[4]});
		const 
TINSIMs = await DmmControllerV2Pn8Ze04.decreaseTotalSupply.call(uintyhGlJdD, uintHvnjmsO, {from: accounts[4]});
		const boolxwirAr5 = await DmmControllerV2Pn8Ze04.paused.call({from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addressEh1s7YB = "0x0000000000000000000000000000000000000001"
		const addressoyIQmD9 = accounts[4]
		const addressy79kH8s = accounts[2]
		const addressMAk2ysR = accounts[3]
		const addressERemvpG = "0x0000000000000000000000000000000000000001"
		const addressCFqqizQ = accounts[1]
		const addressRcjr4hq = accounts[1]
		const addressqRGLp52 = "0x0000000000000000000000000000000000000001"
		const addressGNwZakz = accounts[1]
		const uintEO4eTu3 = BigInt("1186")
		const uintZwWzVKK = BigInt("756")
		const addressDZFCIV6 = accounts[2]
		const DmmControllerV2A6DBfo9 = await DmmControllerV2.new(addressEh1s7YB, addressoyIQmD9, addressy79kH8s, addressMAk2ysR, addressERemvpG, addressCFqqizQ, addressRcjr4hq, addressqRGLp52, addressGNwZakz, uintEO4eTu3, uintZwWzVKK, addressDZFCIV6, {from: accounts[2]});
		const uinthzYTsHK = BigInt("1490")
		const uintBX3rsl3 = BigInt("721")
		const addresst1NYWfz = accounts[3]
		const uintIhAnF7g = BigInt("1064")
		const uintoqFxiVV = BigInt("265")
		await DmmControllerV2A6DBfo9.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const 
ZXFYMUY = await DmmControllerV2A6DBfo9.decreaseTotalSupply.call(uintBX3rsl3, uinthzYTsHK, {from: accounts[4]});
		const 
rfTySy = await DmmControllerV2A6DBfo9.setGuardian.call(addresst1NYWfz, {from: accounts[0]});
		const 
r4vei7 = await DmmControllerV2A6DBfo9.adminWithdrawFunds.call(uintoqFxiVV, uintIhAnF7g, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for DmmControllerV2', async () => {
		const addressBF07bmU = accounts[2]
		const addressp5oo48 = accounts[3]
		const addressCJqPN2f = accounts[0]
		const addressdiC7Ksl = accounts[1]
		const addressU39FHg = accounts[2]
		const addresst89F8xE = accounts[4]
		const addressOOaCFkp = accounts[3]
		const addressRje8ei = accounts[3]
		const addressOfkBqTi = "0x0000000000000000000000000000000000000001"
		const uintapVW2kc = BigInt("1036")
		const uintZfhLHQ2 = BigInt("561")
		const addressRFhIF1a = "0x0000000000000000000000000000000000000001"
		const DmmControllerV2ijgcrW6 = await DmmControllerV2.new(addressBF07bmU, addressp5oo48, addressCJqPN2f, addressdiC7Ksl, addressU39FHg, addresst89F8xE, addressOOaCFkp, addressRje8ei, addressOfkBqTi, uintapVW2kc, uintZfhLHQ2, addressRFhIF1a, {from: "0x0000000000000000000000000000000000000001"});
		const addressKCb8wNO = accounts[4]
		const uintbgaq00a = await DmmControllerV2ijgcrW6.getActiveCollateralization.call({from: accounts[1]});
		const 
u2zUhl = await DmmControllerV2ijgcrW6.transferOwnership.call(addressKCb8wNO, {from: accounts[4]});
		await DmmControllerV2ijgcrW6.onlyBlacklister.call({from: accounts[2]});
	});

	it('test for DmmControllerV2', async () => {
		const addressvyJvhuq = accounts[0]
		const addressxQyPBgf = accounts[2]
		const addressOohOJp0 = accounts[2]
		const addressPecUY65 = accounts[5]
		const addressWdSgZIU = accounts[3]
		const addressk4wQMtG = accounts[0]
		const addressZ9iVwmH = accounts[0]
		const addressTNC7pt = accounts[1]
		const addressczjwZOO = accounts[3]
		const uintAkyk8dW = BigInt("342")
		const uintEp2XpM = BigInt("1594")
		const addressaYi5EL3 = accounts[2]
		const DmmControllerV2zBgOp2n = await DmmControllerV2.new(addressvyJvhuq, addressxQyPBgf, addressOohOJp0, addressPecUY65, addressWdSgZIU, addressk4wQMtG, addressZ9iVwmH, addressTNC7pt, addressczjwZOO, uintAkyk8dW, uintEp2XpM, addressaYi5EL3, {from: accounts[1]});
		const addressJcGCiX = accounts[5]
		const addressW02ZWMa = accounts[0]
		const uintMpvUqUa = BigInt("40")
		const bools9dZT2Q = await DmmControllerV2zBgOp2n.isMarketEnabledByDmmTokenAddress.call(addressJcGCiX, {from: accounts[3]});
		const addressLuD5Nq0 = await DmmControllerV2zBgOp2n.setOffChainAssetValuator.call(addressW02ZWMa, {from: accounts[3]});
		const uintgjuLT2 = await DmmControllerV2zBgOp2n.requireIsSecondaryMarketNft.call(uintMpvUqUa, {from: accounts[2]});
	});

	it('test for DmmControllerV2', async () => {
		const addressisjMj4O = accounts[0]
		const addressOoFzOc5 = accounts[2]
		const addresseUsATKm = accounts[2]
		const addressLB7eaAC = accounts[5]
		const addressc0BOUDn = accounts[3]
		const addressR3XitA = accounts[0]
		const addressYQf80U9 = accounts[0]
		const addressxNpPLh = accounts[1]
		const addresskVpDksR = accounts[3]
		const uintCB9hP6V = BigInt("342")
		const uinty9OEbjL = BigInt("1594")
		const addressrcc7PLc = accounts[2]
		const DmmControllerV2zBgOp2n = await DmmControllerV2.new(addressisjMj4O, addressOoFzOc5, addresseUsATKm, addressLB7eaAC, addressc0BOUDn, addressR3XitA, addressYQf80U9, addressxNpPLh, addresskVpDksR, uintCB9hP6V, uinty9OEbjL, addressrcc7PLc, {from: accounts[1]});
		const addressnO1d5aA = accounts[3]
		const addressdxuaZKR = accounts[5]
		const addressspDBf6G = accounts[0]
		const addressJpbGFsV = await DmmControllerV2zBgOp2n.setInterestRateInterface.call(addressnO1d5aA, {from: accounts[0]});
		await DmmControllerV2zBgOp2n.renouncePauser.call({from: accounts[2]});
		const bools9dZT2Q = await DmmControllerV2zBgOp2n.isMarketEnabledByDmmTokenAddress.call(addressdxuaZKR, {from: accounts[3]});
		const addressLuD5Nq0 = await DmmControllerV2zBgOp2n.setOffChainAssetValuator.call(addressspDBf6G, {from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addressAaZHimp = accounts[0]
		const addressxgJf0a = accounts[2]
		const addressB8Ijn3f = accounts[2]
		const addressT1dwJs7 = accounts[5]
		const addresspqFzpUb = accounts[3]
		const addressrO2VA6e = accounts[0]
		const addressXarYW7Y = accounts[0]
		const addressZOjJgmD = accounts[1]
		const addressXrOBTXi = accounts[3]
		const uintHzdCnH = BigInt("342")
		const uintIXBMN6 = BigInt("1594")
		const addresstHI65x = accounts[2]
		const DmmControllerV2zBgOp2n = await DmmControllerV2.new(addressAaZHimp, addressxgJf0a, addressB8Ijn3f, addressT1dwJs7, addresspqFzpUb, addressrO2VA6e, addressXarYW7Y, addressZOjJgmD, addressXrOBTXi, uintHzdCnH, uintIXBMN6, addresstHI65x, {from: accounts[1]});
		const address6W0oBE = accounts[0]
		const addressXxBwH7F = accounts[6]
		const uintEXY6dTy = BigInt("1803")
		const addresstvHqAI = accounts[0]
		const uint6xOm0L = await DmmControllerV2zBgOp2n.getExchangeRateByUnderlying.call(address6W0oBE, {from: accounts[0]});
		const bools9dZT2Q = await DmmControllerV2zBgOp2n.isMarketEnabledByDmmTokenAddress.call(addressXxBwH7F, {from: accounts[3]});
		const uintxNhnQk0 = await DmmControllerV2zBgOp2n.requireIsSecondaryMarketNft.call(uintEXY6dTy, {from: "0x0000000000000000000000000000000000000001"});
		const addressLuD5Nq0 = await DmmControllerV2zBgOp2n.setOffChainAssetValuator.call(addresstvHqAI, {from: accounts[3]});
	});
})