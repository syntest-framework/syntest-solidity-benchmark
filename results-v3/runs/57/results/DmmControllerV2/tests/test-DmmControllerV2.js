const DmmControllerV2 = artifacts.require("DmmControllerV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DmmControllerV2', (accounts) => {
	it('test for DmmControllerV2', async () => {
		const addressv5zl5mv = accounts[2]
		const addressX3ARVZZ = accounts[0]
		const addressf73lT4J = accounts[5]
		const addressf7oIhLv = accounts[1]
		const addressTBOWmCL = accounts[0]
		const addressB7UJRH = accounts[2]
		const addresscPGAP6p = accounts[1]
		const addressRx0N23S = accounts[3]
		const addressFId4DS = accounts[0]
		const uintYn44Yi3 = BigInt("2039")
		const uintbv7Djsu = BigInt("1465")
		const address0YmAyc = accounts[2]
		const DmmControllerV2X4fV0Mq = await DmmControllerV2.new(addressv5zl5mv, addressX3ARVZZ, addressf73lT4J, addressf7oIhLv, addressTBOWmCL, addressB7UJRH, addresscPGAP6p, addressRx0N23S, addressFId4DS, uintYn44Yi3, uintbv7Djsu, address0YmAyc, {from: "0x0000000000000000000000000000000000000001"});
		const uintxYmPk1K = BigInt("90")
		const uintjNs9SIA = BigInt("313")
		const uintroC1bqn = BigInt("1095")
		const uintBB0dG8J = BigInt("228")
		const uintz2RHA33 = BigInt("226")
		await DmmControllerV2X4fV0Mq.initializer.call({from: accounts[3]});
		const 
vNY1m04 = await DmmControllerV2X4fV0Mq.adminWithdrawFunds.call(uintjNs9SIA, uintxYmPk1K, {from: accounts[0]});
		const uintpPrgUM1 = await DmmControllerV2X4fV0Mq.requireCanWithdrawFunds.call(uintroC1bqn, {from: accounts[0]});
		const 
JaYh8Hp = await DmmControllerV2X4fV0Mq.increaseTotalSupply.call(uintz2RHA33, uintBB0dG8J, {from: accounts[0]});
		await DmmControllerV2X4fV0Mq.onlyOwner.call({from: accounts[5]});
	});

	it('test for DmmControllerV2', async () => {
		const DmmControllerV2SUMU12H = await DmmControllerV2.new({from: accounts[2]});
		const addressmCOszsc = accounts[0]
		const uintlB2HJvY = BigInt("1210")
		const 
J1ua8eO = await DmmControllerV2SUMU12H.transferGuardian.call(addressmCOszsc, {from: accounts[2]});
		await DmmControllerV2SUMU12H.requireIsStakingPurchaser.call({from: accounts[0]});
		const uintNKxgm1z = await DmmControllerV2SUMU12H.requireIsValidNft.call(uintlB2HJvY, {from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addressONocKmW = accounts[3]
		const addressArPA0vV = accounts[2]
		const addressDY6Pw5v = accounts[4]
		const addressdC4rhJT = accounts[3]
		const addressikdzBjc = accounts[5]
		const addressQPhgboT = accounts[3]
		const addresshBpuO1Q = accounts[0]
		const addressWUmPdiv = accounts[1]
		const addresshZLOzei = accounts[0]
		const uintHj6f5CD = BigInt("1786")
		const uintSCk6A2 = BigInt("527")
		const addressOzttdc = accounts[2]
		const DmmControllerV2LdaveEN = await DmmControllerV2.new(addressONocKmW, addressArPA0vV, addressDY6Pw5v, addressdC4rhJT, addressikdzBjc, addressQPhgboT, addresshBpuO1Q, addressWUmPdiv, addresshZLOzei, uintHj6f5CD, uintSCk6A2, addressOzttdc, {from: accounts[3]});
		const addressC8eYTIq = accounts[1]
		const addresssahiDEf = "0x0000000000000000000000000000000000000001"
		const addressr0AsR5u = accounts[4]
		const addressl1ckr76 = accounts[2]
		const addresshtq3UsE = await DmmControllerV2LdaveEN.transferOwnership.call(addressC8eYTIq, {from: accounts[3]});
		const addressF7rpKz = await DmmControllerV2LdaveEN.getDmmTokenForUnderlying.call(addresssahiDEf, {from: "0x0000000000000000000000000000000000000001"});
		const 
oVmbkCw = await DmmControllerV2LdaveEN.addMarketFromExistingDmmToken.call(addressl1ckr76, addressr0AsR5u, {from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addressEo6eim6 = accounts[4]
		const addressUL4HYlI = accounts[0]
		const addressLFL03G0 = accounts[1]
		const addressq6ransG = accounts[1]
		const addressab4SAD1 = accounts[2]
		const addressPHlN7Cd = accounts[0]
		const addressBK4Dg3 = accounts[0]
		const addressrodxkBz = "0x0000000000000000000000000000000000000001"
		const addressCWZeLYA = accounts[1]
		const uintdGiDR4c = BigInt("1177")
		const uintGjzJel = BigInt("315")
		const addressGZAtiLK = accounts[5]
		const DmmControllerV2hCFhWWV = await DmmControllerV2.new(addressEo6eim6, addressUL4HYlI, addressLFL03G0, addressq6ransG, addressab4SAD1, addressPHlN7Cd, addressBK4Dg3, addressrodxkBz, addressCWZeLYA, uintdGiDR4c, uintGjzJel, addressGZAtiLK, {from: accounts[3]});
		const addresslxFZrJ1 = accounts[2]
		const uintLBOMQP3 = BigInt("391")
		await DmmControllerV2hCFhWWV.nonReentrant.call({from: accounts[0]});
		await DmmControllerV2hCFhWWV.pause.call({from: accounts[3]});
		await DmmControllerV2hCFhWWV.renouncePauser.call({from: accounts[1]});
		const addressziDdw2D = await DmmControllerV2hCFhWWV.transferOwnership.call(addresslxFZrJ1, {from: accounts[2]});
		const uintgMhZddn = await DmmControllerV2hCFhWWV.setMinCollateralization.call(uintLBOMQP3, {from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addressCldeLAS = accounts[3]
		const addressccQmVCQ = accounts[2]
		const addresspuiBdff = accounts[4]
		const addresswU38Lvi = accounts[3]
		const addresszaXGC4 = accounts[5]
		const addressg1DmhQj = accounts[3]
		const addressQJKWALK = accounts[0]
		const addressVBM0aM3 = accounts[1]
		const addressLtyDunu = accounts[0]
		const uintPdWhyf6 = BigInt("1786")
		const uintT2HuEQ = BigInt("527")
		const addressGckzcBE = accounts[2]
		const DmmControllerV2LdaveEN = await DmmControllerV2.new(addressCldeLAS, addressccQmVCQ, addresspuiBdff, addresswU38Lvi, addresszaXGC4, addressg1DmhQj, addressQJKWALK, addressVBM0aM3, addressLtyDunu, uintPdWhyf6, uintT2HuEQ, addressGckzcBE, {from: accounts[3]});
		const addressytHspkh = accounts[1]
		const addressOw5wGOA = accounts[0]
		const address1BOfkJ = "0x0000000000000000000000000000000000000000"
		const addressIe8IRm5 = accounts[4]
		const addressnxJlNQH = accounts[2]
		const addresshtq3UsE = await DmmControllerV2LdaveEN.transferOwnership.call(addressytHspkh, {from: accounts[3]});
		const addresstLANOlS = await DmmControllerV2LdaveEN.setOffChainAssetValuator.call(addressOw5wGOA, {from: accounts[3]});
		const addressF7rpKz = await DmmControllerV2LdaveEN.getDmmTokenForUnderlying.call(address1BOfkJ, {from: "0x0000000000000000000000000000000000000001"});
		const 
oVmbkCw = await DmmControllerV2LdaveEN.addMarketFromExistingDmmToken.call(addressnxJlNQH, addressIe8IRm5, {from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addressDQ91Bpj = accounts[3]
		const addressLB5vhdz = accounts[2]
		const addressXBmSZfH = accounts[4]
		const addressrbKeJZ = accounts[3]
		const addressNT9d8ij = accounts[5]
		const addresszkYkn6 = accounts[3]
		const addressh3wOfri = accounts[0]
		const addressTo7JbZ = accounts[1]
		const addresseozu3EK = accounts[0]
		const uintLnBnNn = BigInt("1786")
		const uintV3c1bhA = BigInt("527")
		const addressANxQQGE = accounts[2]
		const DmmControllerV2LdaveEN = await DmmControllerV2.new(addressDQ91Bpj, addressLB5vhdz, addressXBmSZfH, addressrbKeJZ, addressNT9d8ij, addresszkYkn6, addressh3wOfri, addressTo7JbZ, addresseozu3EK, uintLnBnNn, uintV3c1bhA, addressANxQQGE, {from: accounts[3]});
		const addressUEjpBXG = accounts[1]
		const addressjtLLBqc = accounts[4]
		const addressLrfWhQb = accounts[2]
		const addresshtq3UsE = await DmmControllerV2LdaveEN.transferOwnership.call(addressUEjpBXG, {from: accounts[3]});
		const 
oVmbkCw = await DmmControllerV2LdaveEN.addMarketFromExistingDmmToken.call(addressLrfWhQb, addressjtLLBqc, {from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addressH4Y349Z = accounts[3]
		const addressupAbZO8 = accounts[2]
		const addresspAKlQTv = accounts[4]
		const addressykyRl94 = accounts[3]
		const addresswgMrFqR = accounts[5]
		const addressMlwNyk = accounts[3]
		const addresshWsHamv = accounts[0]
		const addressAwk6AlC = accounts[1]
		const addressMwmlvh = accounts[0]
		const uintqKsR6K5 = BigInt("1786")
		const uintZ1BGQwA = BigInt("527")
		const addressRtK8BTk = accounts[2]
		const DmmControllerV2LdaveEN = await DmmControllerV2.new(addressH4Y349Z, addressupAbZO8, addresspAKlQTv, addressykyRl94, addresswgMrFqR, addressMlwNyk, addresshWsHamv, addressAwk6AlC, addressMwmlvh, uintqKsR6K5, uintZ1BGQwA, addressRtK8BTk, {from: accounts[3]});
		const addressaUE4tHu = accounts[1]
		const addressFJjbnew = accounts[1]
		const addressqe8J0nl = accounts[4]
		const addressQznzD2v = accounts[2]
		const addresshtq3UsE = await DmmControllerV2LdaveEN.transferOwnership.call(addressaUE4tHu, {from: accounts[3]});
		const addresswTPrxZo = await DmmControllerV2LdaveEN.transferOwnership.call(addressFJjbnew, {from: accounts[0]});
		const 
oVmbkCw = await DmmControllerV2LdaveEN.addMarketFromExistingDmmToken.call(addressQznzD2v, addressqe8J0nl, {from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addressjlLDNgL = accounts[3]
		const addressI7zxlnj = accounts[2]
		const addressE3TXINL = accounts[4]
		const addresssrmrtnD = accounts[3]
		const addresswmKjQLJ = accounts[5]
		const addressolBq5UY = accounts[3]
		const addressefOs95z = accounts[0]
		const addresscWP2wZe = accounts[1]
		const addressIk3rVDU = accounts[0]
		const uintop6qJp4 = BigInt("1786")
		const uintOSNB7Aj = BigInt("527")
		const addressqYRzzi = accounts[2]
		const DmmControllerV2LdaveEN = await DmmControllerV2.new(addressjlLDNgL, addressI7zxlnj, addressE3TXINL, addresssrmrtnD, addresswmKjQLJ, addressolBq5UY, addressefOs95z, addresscWP2wZe, addressIk3rVDU, uintop6qJp4, uintOSNB7Aj, addressqYRzzi, {from: accounts[3]});
		const addressiq478yX = accounts[1]
		const uintrAxhWL = BigInt("452")
		const addressFUZ42xW = accounts[4]
		const addressMxKnjeo = accounts[3]
		const addresshtq3UsE = await DmmControllerV2LdaveEN.transferOwnership.call(addressiq478yX, {from: accounts[3]});
		const addressRjQ9PTB = await DmmControllerV2LdaveEN.getDmmTokenAddressByDmmTokenId.call(uintrAxhWL, {from: accounts[1]});
		await DmmControllerV2LdaveEN.requireIsFromAssetIntroducer.call({from: accounts[4]});
		const 
oVmbkCw = await DmmControllerV2LdaveEN.addMarketFromExistingDmmToken.call(addressMxKnjeo, addressFUZ42xW, {from: accounts[3]});
		const boolClMjUer = await DmmControllerV2LdaveEN.isOwner.call({from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressHEu1vWw = accounts[3]
		const addressyw2KCwv = accounts[2]
		const addressCPKwRJm = accounts[4]
		const addresstuABVY7 = accounts[3]
		const addressnKKy9Yr = accounts[5]
		const addressWduN6Km = accounts[3]
		const addressjLHA0jt = accounts[0]
		const addressmOWX0R9 = accounts[1]
		const addresscv16YfI = accounts[0]
		const uintndkf0nx = BigInt("1786")
		const uintWbrUBLQ = BigInt("527")
		const addresst5nlet = accounts[2]
		const DmmControllerV2LdaveEN = await DmmControllerV2.new(addressHEu1vWw, addressyw2KCwv, addressCPKwRJm, addresstuABVY7, addressnKKy9Yr, addressWduN6Km, addressjLHA0jt, addressmOWX0R9, addresscv16YfI, uintndkf0nx, uintWbrUBLQ, addresst5nlet, {from: accounts[3]});
		const addressEjBTfag = accounts[1]
		const addressQrebMq = accounts[2]
		const addresswQNDjW = accounts[4]
		const address8VTnLT = accounts[5]
		const addresshtq3UsE = await DmmControllerV2LdaveEN.transferOwnership.call(addressEjBTfag, {from: accounts[3]});
		const addressWqLh99Q = await DmmControllerV2LdaveEN.setDmmTokenFactory.call(addressQrebMq, {from: accounts[3]});
		await DmmControllerV2LdaveEN.requireIsFromAssetIntroducer.call({from: accounts[4]});
		await DmmControllerV2LdaveEN.renounceOwnership.call({from: accounts[4]});
		const 
oVmbkCw = await DmmControllerV2LdaveEN.addMarketFromExistingDmmToken.call(address8VTnLT, addresswQNDjW, {from: accounts[3]});
		const boolClMjUer = await DmmControllerV2LdaveEN.isOwner.call({from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressiaGGVYO = accounts[3]
		const addressaNp4N63 = accounts[2]
		const addressDnTQOy4 = accounts[4]
		const addressHWOvSlC = accounts[3]
		const addressXz4zqno = accounts[5]
		const addressMcrMefw = accounts[3]
		const addressbrASp6o = accounts[0]
		const addressbiC7ZTp = accounts[1]
		const addresshdNr7j = accounts[0]
		const uintmQkOPJt = BigInt("1786")
		const uinta6iRP2 = BigInt("527")
		const addressKXyzxgO = accounts[2]
		const DmmControllerV2LdaveEN = await DmmControllerV2.new(addressiaGGVYO, addressaNp4N63, addressDnTQOy4, addressHWOvSlC, addressXz4zqno, addressMcrMefw, addressbrASp6o, addressbiC7ZTp, addresshdNr7j, uintmQkOPJt, uinta6iRP2, addressKXyzxgO, {from: accounts[3]});
		const addressbCXQkMW = accounts[5]
		const addressbCMx0yE = accounts[2]
		const uintWJ3dM8U = BigInt("1826")
		const boolaGOvd3I = await DmmControllerV2LdaveEN.isMarketEnabledByDmmTokenAddress.call(addressbCXQkMW, {from: accounts[1]});
		const addresshtq3UsE = await DmmControllerV2LdaveEN.transferOwnership.call(addressbCMx0yE, {from: accounts[3]});
		const uintX11qIG9 = await DmmControllerV2LdaveEN.setMinCollateralization.call(uintWJ3dM8U, {from: accounts[0]});
	});

	it('test for DmmControllerV2', async () => {
		const addressDCHvZCm = accounts[3]
		const addressNiEFIM = accounts[2]
		const addresshgfXgqL = accounts[4]
		const addressyLiXmpi = accounts[3]
		const addressqVd44q0 = accounts[5]
		const addressr1grI37 = accounts[3]
		const address4jtTrj = accounts[0]
		const addressLeQVvEp = accounts[1]
		const addressWuFauXC = accounts[0]
		const uintrJpHtW = BigInt("1786")
		const uinteFjqT5E = BigInt("527")
		const addressYq4x2XT = accounts[2]
		const DmmControllerV2LdaveEN = await DmmControllerV2.new(addressDCHvZCm, addressNiEFIM, addresshgfXgqL, addressyLiXmpi, addressqVd44q0, addressr1grI37, address4jtTrj, addressLeQVvEp, addressWuFauXC, uintrJpHtW, uinteFjqT5E, addressYq4x2XT, {from: accounts[3]});
		const addressJ2a3qDk = accounts[2]
		const addressTqZZG3 = accounts[4]
		const addressX0W3zty = "0x0000000000000000000000000000000000000000"
		const addressQoxmQNo = accounts[2]
		const addresshtq3UsE = await DmmControllerV2LdaveEN.transferOwnership.call(addressJ2a3qDk, {from: accounts[3]});
		const addressqm6uVyY = await DmmControllerV2LdaveEN.addPauser.call(addressTqZZG3, {from: accounts[0]});
		const addressF7rpKz = await DmmControllerV2LdaveEN.getDmmTokenForUnderlying.call(addressX0W3zty, {from: "0x0000000000000000000000000000000000000001"});
		const uintzGZN2Pp = await DmmControllerV2LdaveEN.getInterestRateByUnderlyingTokenAddress.call(addressQoxmQNo, {from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addressqyicUz = accounts[3]
		const addressH4z1kyw = accounts[2]
		const addressU32P9gW = accounts[4]
		const addressdpgZexd = accounts[3]
		const addressIxbCt9 = accounts[5]
		const addressWwc5AUl = accounts[3]
		const addressds6m29T = accounts[0]
		const addressxiw246 = accounts[1]
		const addressso3Jjuj = accounts[0]
		const uintUCmHEPz = BigInt("1786")
		const uintdzFDyF7 = BigInt("527")
		const addressGVEomMi = accounts[2]
		const DmmControllerV2LdaveEN = await DmmControllerV2.new(addressqyicUz, addressH4z1kyw, addressU32P9gW, addressdpgZexd, addressIxbCt9, addressWwc5AUl, addressds6m29T, addressxiw246, addressso3Jjuj, uintUCmHEPz, uintdzFDyF7, addressGVEomMi, {from: accounts[3]});
		const addressWyyw0m = accounts[3]
		const addressJ4s1pke = accounts[3]
		const addressBn6QqVd = "0x0000000000000000000000000000000000000000"
		const uintwbCv8Dk = await DmmControllerV2LdaveEN.getActiveCollateralization.call({from: accounts[1]});
		const uintUpKlUDS = await DmmControllerV2LdaveEN.getInterestRateByUnderlyingTokenAddress.call(addressWyyw0m, {from: accounts[5]});
		const 
Bljo2mB = await DmmControllerV2LdaveEN.transferGuardian.call(addressJ4s1pke, {from: accounts[3]});
		const addressF7rpKz = await DmmControllerV2LdaveEN.getDmmTokenForUnderlying.call(addressBn6QqVd, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for DmmControllerV2', async () => {
		const addressX2eeXEj = accounts[3]
		const address8w6UWj = accounts[2]
		const addressd3ZhJ4b = accounts[4]
		const addressYLLjFXf = accounts[3]
		const addressW2RdxOO = accounts[5]
		const addressyxaM2VF = accounts[3]
		const addressaIJI6Ow = accounts[0]
		const addresszj39KWu = accounts[1]
		const addresszXdqCkD = accounts[0]
		const uintmGt4DF = BigInt("1786")
		const uintTprTV7H = BigInt("527")
		const addressBWBK9wf = accounts[2]
		const DmmControllerV2LdaveEN = await DmmControllerV2.new(addressX2eeXEj, address8w6UWj, addressd3ZhJ4b, addressYLLjFXf, addressW2RdxOO, addressyxaM2VF, addressaIJI6Ow, addresszj39KWu, addresszXdqCkD, uintmGt4DF, uintTprTV7H, addressBWBK9wf, {from: accounts[3]});
		const addresspFPp3nj = accounts[3]
		const uinttdpAy6c = BigInt("935")
		const uintdZiL2yQ = BigInt("1128")
		const addresshtq3UsE = await DmmControllerV2LdaveEN.transferOwnership.call(addresspFPp3nj, {from: accounts[3]});
		const uintarrayIKfgn9y = await DmmControllerV2LdaveEN.getDmmTokenIds.call({from: accounts[5]});
		const uintFzpQfYG = await DmmControllerV2LdaveEN.requireIsSecondaryMarketNft.call(uinttdpAy6c, {from: accounts[3]});
		const uintRByhgnF = await DmmControllerV2LdaveEN.enableMarket.call(uintdZiL2yQ, {from: accounts[0]});
	});
})