const DmmControllerV2 = artifacts.require("DmmControllerV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DmmControllerV2', (accounts) => {
	it('test for DmmControllerV2', async () => {
		const DmmControllerV2ANe70JP = await DmmControllerV2.new({from: accounts[0]});
		const uintB1Pi471 = BigInt("49")
		const uintLOuwTOe = BigInt("2047")
		const addressJKMODiB = accounts[3]
		const uintVdcvMiJ = await DmmControllerV2ANe70JP.requireCanWithdrawFunds.call(uintB1Pi471, {from: accounts[2]});
		await DmmControllerV2ANe70JP.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		await DmmControllerV2ANe70JP.whenNotPaused.call({from: accounts[2]});
		const uintU0ohuF = await DmmControllerV2ANe70JP.requireIsNftOwner.call(uintLOuwTOe, {from: accounts[0]});
		const addressZji51XQ = await DmmControllerV2ANe70JP.setUnderlyingTokenValuator.call(addressJKMODiB, {from: accounts[0]});
		await DmmControllerV2ANe70JP.renounceGuardian.call({from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressFgwwcFe = accounts[3]
		const addressLsTAAH = accounts[2]
		const addressqylADeu = accounts[5]
		const addressAjLGdlI = accounts[2]
		const addressrWlJMQy = "0x0000000000000000000000000000000000000001"
		const addressYi6qoeg = accounts[0]
		const addressrpPMAV4 = accounts[1]
		const addressJsKCmgK = accounts[5]
		const addressGkJ7HGC = accounts[1]
		const uinth05B4sX = BigInt("404")
		const uintFoe5TiW = BigInt("1697")
		const addressR83bzvx = accounts[4]
		const DmmControllerV2Mk51188 = await DmmControllerV2.new(addressFgwwcFe, addressLsTAAH, addressqylADeu, addressAjLGdlI, addressrWlJMQy, addressYi6qoeg, addressrpPMAV4, addressJsKCmgK, addressGkJ7HGC, uinth05B4sX, uintFoe5TiW, addressR83bzvx, {from: accounts[5]});
		const addressBt7S5is = accounts[3]
		const addressDC18qXu = accounts[0]
		const uintdVGoq92 = BigInt("406")
		const uintZUMfwgR = BigInt("1241")
		const uintO8JKT6k = await DmmControllerV2Mk51188.getExchangeRate.call(addressBt7S5is, {from: accounts[4]});
		const addressbhv6dLm = await DmmControllerV2Mk51188.addPauser.call(addressDC18qXu, {from: accounts[2]});
		const 
pRpYTV6 = await DmmControllerV2Mk51188.adminWithdrawFunds.call(uintZUMfwgR, uintdVGoq92, {from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addressTJgVHyX = accounts[0]
		const addressq3ygWM = accounts[3]
		const addressm5R4mj1 = accounts[1]
		const addressZWsJh89 = accounts[2]
		const addressrEeyawq = accounts[3]
		const addressPBoioAd = accounts[2]
		const addressq9EQiAJ = accounts[3]
		const addressGBQxwYu = accounts[2]
		const addressCt3S1F = accounts[4]
		const uinttatNqBS = BigInt("1698")
		const uintY820F0S = BigInt("1488")
		const addressHUUelEW = accounts[2]
		const DmmControllerV2E4yFLf3 = await DmmControllerV2.new(addressTJgVHyX, addressq3ygWM, addressm5R4mj1, addressZWsJh89, addressrEeyawq, addressPBoioAd, addressq9EQiAJ, addressGBQxwYu, addressCt3S1F, uinttatNqBS, uintY820F0S, addressHUUelEW, {from: accounts[3]});
		const addressFCXW7FV = accounts[3]
		const addressw5pESVg = accounts[2]
		const uintBG3vXnZ = await DmmControllerV2E4yFLf3.getTotalCollateralization.call({from: "0x0000000000000000000000000000000000000001"});
		const 
M1lpC9I = await DmmControllerV2E4yFLf3.addMarketFromExistingDmmToken.call(addressw5pESVg, addressFCXW7FV, {from: accounts[5]});
	});

	it('test for DmmControllerV2', async () => {
		const addressuYB3Y4Z = accounts[0]
		const addresselMkKkt = accounts[3]
		const addressUStnaMa = accounts[2]
		const addressLRYAktM = accounts[2]
		const addressQsLQ4wR = accounts[1]
		const addressuyxKk5g = accounts[4]
		const addresstXfUZxP = accounts[1]
		const addressDuxj78d = accounts[2]
		const addressVASkDBn = accounts[1]
		const uintx14WZri = BigInt("653")
		const uintnYUPwZE = BigInt("1555")
		const addressRkLX2AR = accounts[2]
		const DmmControllerV2YEYG8iX = await DmmControllerV2.new(addressuYB3Y4Z, addresselMkKkt, addressUStnaMa, addressLRYAktM, addressQsLQ4wR, addressuyxKk5g, addresstXfUZxP, addressDuxj78d, addressVASkDBn, uintx14WZri, uintnYUPwZE, addressRkLX2AR, {from: accounts[1]});
		await DmmControllerV2YEYG8iX.renouncePauser.call({from: accounts[5]});
		await DmmControllerV2YEYG8iX.requireIsFromAssetIntroducer.call({from: accounts[4]});
		await DmmControllerV2YEYG8iX.onlyBlacklister.call({from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addressJWD7IF = accounts[2]
		const addressODzXTV = accounts[4]
		const addressBVOgwTU = accounts[1]
		const addressSMT5Kwb = accounts[2]
		const addressGu75Wkt = accounts[1]
		const addressrpUzCxI = accounts[3]
		const addressGnb7e3L = accounts[0]
		const addressnt9Mo7S = accounts[3]
		const addressM6fbhqu = accounts[0]
		const uintUYs91O = BigInt("318")
		const uintnHerTNQ = BigInt("1086")
		const addressqzyu5PO = accounts[3]
		const DmmControllerV2s6yFg5u = await DmmControllerV2.new(addressJWD7IF, addressODzXTV, addressBVOgwTU, addressSMT5Kwb, addressGu75Wkt, addressrpUzCxI, addressGnb7e3L, addressnt9Mo7S, addressM6fbhqu, uintUYs91O, uintnHerTNQ, addressqzyu5PO, {from: accounts[3]});
		const addressJiK67c1 = accounts[3]
		const uintC88ELMC = BigInt("410")
		const uintPdSolGZ = BigInt("837")
		const uintHfQdswy = await DmmControllerV2s6yFg5u.getInterestRateByDmmTokenAddress.call(addressJiK67c1, {from: accounts[3]});
		const 
cRdYbWV = await DmmControllerV2s6yFg5u.decreaseTotalSupply.call(uintPdSolGZ, uintC88ELMC, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressei3s7Zs = accounts[0]
		const addressCxzzTJ = accounts[3]
		const addressSN2z5vd = accounts[1]
		const addressrnJrOBH = accounts[2]
		const addressL0mW0a = accounts[3]
		const addressUWYPx3t = accounts[2]
		const addressyx8i0l4 = accounts[3]
		const addressQf3kUyj = accounts[2]
		const addressrXm1iT = accounts[4]
		const uintr2f8n6o = BigInt("1698")
		const uintYvrXTEI = BigInt("1488")
		const addressUWD1guf = accounts[2]
		const DmmControllerV2E4yFLf3 = await DmmControllerV2.new(addressei3s7Zs, addressCxzzTJ, addressSN2z5vd, addressrnJrOBH, addressL0mW0a, addressUWYPx3t, addressyx8i0l4, addressQf3kUyj, addressrXm1iT, uintr2f8n6o, uintYvrXTEI, addressUWD1guf, {from: accounts[3]});
		const addressFBpj1En = accounts[4]
		const addressD3fyJgI = accounts[2]
		const 
M1lpC9I = await DmmControllerV2E4yFLf3.addMarketFromExistingDmmToken.call(addressD3fyJgI, addressFBpj1En, {from: accounts[5]});
	});

	it('test for DmmControllerV2', async () => {
		const addresslXexqfY = accounts[2]
		const addressL8adAa = accounts[4]
		const addressBs3wWqp = accounts[1]
		const addressqwk9FiD = accounts[2]
		const addressn7RLD4 = accounts[1]
		const addressZqPf5f = accounts[3]
		const addressoxWO18V = accounts[0]
		const addressnEcfhbO = accounts[3]
		const addresshm5MFH7 = accounts[0]
		const uintQwvWsth = BigInt("318")
		const uintsefU8kx = BigInt("1086")
		const addressfQZPrz6 = accounts[3]
		const DmmControllerV2s6yFg5u = await DmmControllerV2.new(addresslXexqfY, addressL8adAa, addressBs3wWqp, addressqwk9FiD, addressn7RLD4, addressZqPf5f, addressoxWO18V, addressnEcfhbO, addresshm5MFH7, uintQwvWsth, uintsefU8kx, addressfQZPrz6, {from: accounts[3]});
		const addressroyq7Gu = accounts[1]
		const addressC4i22dt = accounts[0]
		const addressKGow6kr = accounts[1]
		const addressWT6MyWJ = accounts[0]
		const addresssVgVZ1u = accounts[3]
		const uintIM7gKxv = BigInt("410")
		const uintpRzXvSK = BigInt("837")
		const 
f9HwFrg = await DmmControllerV2s6yFg5u.initialize.call(addressC4i22dt, addressroyq7Gu, {from: accounts[4]});
		const 
EcH5LNv = await DmmControllerV2s6yFg5u.transferGuardian.call(addressKGow6kr, {from: accounts[3]});
		const 
w3PdFtc = await DmmControllerV2s6yFg5u.initialize.call(addresssVgVZ1u, addressWT6MyWJ, {from: accounts[1]});
		const 
cRdYbWV = await DmmControllerV2s6yFg5u.decreaseTotalSupply.call(uintpRzXvSK, uintIM7gKxv, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressepq1buy = accounts[0]
		const addressa1ZrGzR = accounts[3]
		const addressNniegsw = accounts[1]
		const addresss1jRPPo = accounts[2]
		const addresskCaTlxZ = accounts[3]
		const addressY6Ru6h1 = accounts[2]
		const addressPCrDCVo = accounts[3]
		const addressqIAB3u = accounts[2]
		const addressnCGPNk9 = accounts[4]
		const uintc0aKUUU = BigInt("1698")
		const uintKuoHn0 = BigInt("1488")
		const addressbVhqjUD = accounts[2]
		const DmmControllerV2E4yFLf3 = await DmmControllerV2.new(addressepq1buy, addressa1ZrGzR, addressNniegsw, addresss1jRPPo, addresskCaTlxZ, addressY6Ru6h1, addressPCrDCVo, addressqIAB3u, addressnCGPNk9, uintc0aKUUU, uintKuoHn0, addressbVhqjUD, {from: accounts[3]});
		const uintjiI1VUD = BigInt("451")
		const uintiZV9Ic = BigInt("395")
		const uintD8JzuMP = BigInt("636")
		const addressKen092R = accounts[4]
		const addressbiZoV4P = accounts[2]
		const uintA9A44Y = await DmmControllerV2E4yFLf3.setMinCollateralization.call(uintjiI1VUD, {from: accounts[2]});
		const uintBG3vXnZ = await DmmControllerV2E4yFLf3.getTotalCollateralization.call({from: "0x0000000000000000000000000000000000000001"});
		const 
LfTQfIQ = await DmmControllerV2E4yFLf3.adminWithdrawFunds.call(uintD8JzuMP, uintiZV9Ic, {from: accounts[2]});
		const 
M1lpC9I = await DmmControllerV2E4yFLf3.addMarketFromExistingDmmToken.call(addressbiZoV4P, addressKen092R, {from: accounts[5]});
	});

	it('test for DmmControllerV2', async () => {
		const addressl6hAEfV = accounts[2]
		const address1hbT94 = accounts[4]
		const addressTLePAzs = accounts[1]
		const addressOylsIVz = accounts[2]
		const addressw00xD4K = accounts[1]
		const addressJHm36Y5 = accounts[3]
		const addressqNN8lSQ = accounts[0]
		const addressS3z05cs = accounts[3]
		const address8CvMMB = accounts[0]
		const uintU5OVemS = BigInt("318")
		const uintrKayl0L = BigInt("1086")
		const addressQWbd2CZ = accounts[3]
		const DmmControllerV2s6yFg5u = await DmmControllerV2.new(addressl6hAEfV, address1hbT94, addressTLePAzs, addressOylsIVz, addressw00xD4K, addressJHm36Y5, addressqNN8lSQ, addressS3z05cs, address8CvMMB, uintU5OVemS, uintrKayl0L, addressQWbd2CZ, {from: accounts[3]});
		const addressFjBQPg = "0x0000000000000000000000000000000000000001"
		const addressOScHXN0 = accounts[4]
		const uintVc6K72b = BigInt("410")
		const uintmrl383r = BigInt("837")
		const uinttEziq1 = await DmmControllerV2s6yFg5u.getInterestRateByUnderlyingTokenAddress.call(addressFjBQPg, {from: accounts[1]});
		const uintHfQdswy = await DmmControllerV2s6yFg5u.getInterestRateByDmmTokenAddress.call(addressOScHXN0, {from: accounts[3]});
		const 
cRdYbWV = await DmmControllerV2s6yFg5u.decreaseTotalSupply.call(uintmrl383r, uintVc6K72b, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressx7xwgi4 = accounts[5]
		const addresslzY0HKe = accounts[0]
		const addressSrkE6Ug = accounts[2]
		const addressVtA0XJD = accounts[0]
		const addressgV4H7SG = accounts[4]
		const addressmagi96T = accounts[2]
		const addressI2DrJEl = "0x0000000000000000000000000000000000000001"
		const addressbNna2vE = accounts[0]
		const addressS1ipXt = accounts[3]
		const uintOF6kcAr = BigInt("1516")
		const uintv4LdfDL = BigInt("1377")
		const addressHRWIFM = accounts[0]
		const DmmControllerV2LrvEeTn = await DmmControllerV2.new(addressx7xwgi4, addresslzY0HKe, addressSrkE6Ug, addressVtA0XJD, addressgV4H7SG, addressmagi96T, addressI2DrJEl, addressbNna2vE, addressS1ipXt, uintOF6kcAr, uintv4LdfDL, addressHRWIFM, {from: accounts[2]});
		const uintb8Rcsf6 = BigInt("566")
		const uintkqmK0HZ = BigInt("1698")
		const uinti9KtqhJ = BigInt("856")
		const addressttc8AjX = accounts[3]
		const addressde6hdj9 = accounts[0]
		const addressciN9tVr = await DmmControllerV2LrvEeTn.getDmmTokenAddressByDmmTokenId.call(uintb8Rcsf6, {from: accounts[0]});
		const 
DxNwAn = await DmmControllerV2LrvEeTn.increaseTotalSupply.call(uinti9KtqhJ, uintkqmK0HZ, {from: accounts[0]});
		const uintarrayDXGBLUO = await DmmControllerV2LrvEeTn.getDmmTokenIds.call({from: accounts[4]});
		const 
wSzjHXz = await DmmControllerV2LrvEeTn.addMarketFromExistingDmmToken.call(addressde6hdj9, addressttc8AjX, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressbFVFgW3 = accounts[2]
		const addressGie6MP9 = accounts[4]
		const address4OSPZ8 = accounts[1]
		const addressKeg8elC = accounts[2]
		const addressWjVxXn = accounts[1]
		const addressIJUwgc6 = accounts[3]
		const addressOD1p3HH = accounts[0]
		const addresssyMGo1I = accounts[3]
		const addressSRnyxQ = accounts[0]
		const uintFLctpzQ = BigInt("318")
		const uintY1LnerR = BigInt("1086")
		const addressZLSF6wH = accounts[3]
		const DmmControllerV2s6yFg5u = await DmmControllerV2.new(addressbFVFgW3, addressGie6MP9, address4OSPZ8, addressKeg8elC, addressWjVxXn, addressIJUwgc6, addressOD1p3HH, addresssyMGo1I, addressSRnyxQ, uintFLctpzQ, uintY1LnerR, addressZLSF6wH, {from: accounts[3]});
		const addressi8Jq74C = accounts[2]
		const addressiMLZw57 = accounts[2]
		const addressqZDhu0Y = accounts[1]
		const addressPOX0deB = accounts[4]
		const uintNqyy2sU = BigInt("410")
		const uinty6CF8yf = BigInt("1545")
		const addressjJQPACp = await DmmControllerV2s6yFg5u.setOffChainAssetValuator.call(addressi8Jq74C, {from: accounts[3]});
		const uintHfQdswy = await DmmControllerV2s6yFg5u.getInterestRateByDmmTokenAddress.call(addressiMLZw57, {from: accounts[3]});
		const addressxsU7qj4 = await DmmControllerV2s6yFg5u.addPauser.call(addressqZDhu0Y, {from: accounts[0]});
		await DmmControllerV2s6yFg5u.unpause.call({from: "0x0000000000000000000000000000000000000001"});
		const 
piETMZP = await DmmControllerV2s6yFg5u.transferOwnershipToNewController.call(addressPOX0deB, {from: accounts[1]});
		await DmmControllerV2s6yFg5u.initializer.call({from: accounts[0]});
		const 
cRdYbWV = await DmmControllerV2s6yFg5u.decreaseTotalSupply.call(uinty6CF8yf, uintNqyy2sU, {from: accounts[4]});
	});
})