const DmmControllerV2 = artifacts.require("DmmControllerV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DmmControllerV2', (accounts) => {
	it('test for DmmControllerV2', async () => {
		const DmmControllerV2eciPC2o = await DmmControllerV2.new({from: accounts[5]});
		const addressJew7UBS = accounts[4]
		const addressc9O9GXk = accounts[2]
		const addressgKP6T0M = accounts[0]
		const addressulxOBta = accounts[0]
		const 
VKKHcKl = await DmmControllerV2eciPC2o.initialize.call(addressc9O9GXk, addressJew7UBS, {from: accounts[3]});
		const addressaktGphU = await DmmControllerV2eciPC2o.addPauser.call(addressgKP6T0M, {from: accounts[0]});
		const boolirHxWBH = await DmmControllerV2eciPC2o.paused.call({from: accounts[0]});
		const addressMFLraDi = await DmmControllerV2eciPC2o.setOffChainAssetValuator.call(addressulxOBta, {from: accounts[0]});
	});

	it('test for DmmControllerV2', async () => {
		const address49lXkT = "0x0000000000000000000000000000000000000001"
		const addressgdJeAB7 = accounts[3]
		const addressXBVwCv5 = accounts[3]
		const addressv8y1WMj = accounts[4]
		const addressoklBi6 = accounts[0]
		const addressWouGYr5 = accounts[5]
		const addresssTGquE8 = accounts[3]
		const addressBjJitbg = accounts[3]
		const addressL9k3Tjg = accounts[1]
		const uinty95roD = BigInt("983")
		const uintlYEWuIo = BigInt("1502")
		const addressCerDwr = accounts[0]
		const DmmControllerV2Mi8ybbp = await DmmControllerV2.new(address49lXkT, addressgdJeAB7, addressXBVwCv5, addressv8y1WMj, addressoklBi6, addressWouGYr5, addresssTGquE8, addressBjJitbg, addressL9k3Tjg, uinty95roD, uintlYEWuIo, addressCerDwr, {from: accounts[2]});
		const addressvup5Zht = accounts[1]
		const addressnyKOF2f = accounts[0]
		const addressJx37D48 = accounts[0]
		const addressyizh0tU = await DmmControllerV2Mi8ybbp.addPauser.call(addressvup5Zht, {from: "0x0000000000000000000000000000000000000001"});
		const addressH2tJxu = await DmmControllerV2Mi8ybbp.getUnderlyingTokenForDmm.call(addressnyKOF2f, {from: accounts[1]});
		const uintdbqKy3H = await DmmControllerV2Mi8ybbp.getInterestRateByDmmTokenAddress.call(addressJx37D48, {from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addresstWxiV2J = accounts[0]
		const addressnvKunRS = accounts[0]
		const addressDpTM2IY = accounts[0]
		const addressuBddPx4 = accounts[5]
		const addressgaHskFJ = accounts[2]
		const addressrED5PwT = accounts[0]
		const addressNkBT6pq = accounts[4]
		const addressBPLa3SB = accounts[3]
		const addressNB62jpl = accounts[1]
		const uintc3kB7RY = BigInt("566")
		const uintbVpbK3v = BigInt("1104")
		const addressGeSqyJX = accounts[1]
		const DmmControllerV2VLA0m0g = await DmmControllerV2.new(addresstWxiV2J, addressnvKunRS, addressDpTM2IY, addressuBddPx4, addressgaHskFJ, addressrED5PwT, addressNkBT6pq, addressBPLa3SB, addressNB62jpl, uintc3kB7RY, uintbVpbK3v, addressGeSqyJX, {from: "0x0000000000000000000000000000000000000001"});
		const uintl7lTJs2 = BigInt("1943")
		const uintEmW8Xki = BigInt("1334")
		const uintYTeGSv = BigInt("1070")
		await DmmControllerV2VLA0m0g.requireIsFromAssetIntroducer.call({from: accounts[2]});
		const addressGvdsSfC = await DmmControllerV2VLA0m0g.guardian.call({from: accounts[1]});
		await DmmControllerV2VLA0m0g.renounceOwnership.call({from: accounts[1]});
		await DmmControllerV2VLA0m0g.onlyBlacklister.call({from: "0x0000000000000000000000000000000000000001"});
		const 
ceGdp77 = await DmmControllerV2VLA0m0g.increaseTotalSupply.call(uintEmW8Xki, uintl7lTJs2, {from: accounts[3]});
		const uintZ8oBCQo = await DmmControllerV2VLA0m0g.setMinCollateralization.call(uintYTeGSv, {from: accounts[0]});
	});

	it('test for DmmControllerV2', async () => {
		const addressFoBZZbb = accounts[2]
		const addressUONeLLS = "0x0000000000000000000000000000000000000001"
		const addressj2PcDni = accounts[5]
		const addressrfuvY7z = accounts[3]
		const addressIcKiAza = accounts[4]
		const addressF3S9Xw9 = accounts[4]
		const addressgCu8nCH = accounts[0]
		const addressAAWDbB6 = accounts[5]
		const addressqouWkan = accounts[4]
		const uintamR7Wg = BigInt("1684")
		const uintR3zNB6X = BigInt("1147")
		const addressv6zv1Wx = accounts[4]
		const DmmControllerV2UHbLPTv = await DmmControllerV2.new(addressFoBZZbb, addressUONeLLS, addressj2PcDni, addressrfuvY7z, addressIcKiAza, addressF3S9Xw9, addressgCu8nCH, addressAAWDbB6, addressqouWkan, uintamR7Wg, uintR3zNB6X, addressv6zv1Wx, {from: accounts[4]});
		const addresslZpFXVN = accounts[5]
		const uintJ9tDuel = await DmmControllerV2UHbLPTv.getTotalCollateralization.call({from: accounts[2]});
		const boolKIbXJu = await DmmControllerV2UHbLPTv.paused.call({from: accounts[5]});
		const addressf54sXrk = await DmmControllerV2UHbLPTv.transferOwnership.call(addresslZpFXVN, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for DmmControllerV2', async () => {
		const addressQzcRb89 = "0x0000000000000000000000000000000000000001"
		const addressbZkKBci = accounts[3]
		const addressJJOB115 = accounts[3]
		const addressuxpeL5P = accounts[4]
		const addresskoM80S0 = accounts[0]
		const addressLbiKQ7Y = accounts[5]
		const addressZitPri = accounts[3]
		const addressoWsdAmQ = accounts[3]
		const addressUMAfrmP = accounts[1]
		const uintZ41qz9a = BigInt("983")
		const uintUB2zhCf = BigInt("1502")
		const addressrqaRq1m = accounts[0]
		const DmmControllerV2Mi8ybbp = await DmmControllerV2.new(addressQzcRb89, addressbZkKBci, addressJJOB115, addressuxpeL5P, addresskoM80S0, addressLbiKQ7Y, addressZitPri, addressoWsdAmQ, addressUMAfrmP, uintZ41qz9a, uintUB2zhCf, addressrqaRq1m, {from: accounts[2]});
		const uintu8JDuYE = BigInt("807")
		const uintK55Pyy9 = BigInt("1397")
		const addresskG2Saof = accounts[1]
		const addresscVOpkuT = accounts[1]
		const addressQRXGbkp = accounts[0]
		await DmmControllerV2Mi8ybbp.nonReentrant.call({from: accounts[1]});
		const 
mrXL8Mx = await DmmControllerV2Mi8ybbp.decreaseTotalSupply.call(uintK55Pyy9, uintu8JDuYE, {from: accounts[5]});
		const addressyizh0tU = await DmmControllerV2Mi8ybbp.addPauser.call(addresskG2Saof, {from: "0x0000000000000000000000000000000000000001"});
		const addressH2tJxu = await DmmControllerV2Mi8ybbp.getUnderlyingTokenForDmm.call(addresscVOpkuT, {from: accounts[1]});
		const uintdbqKy3H = await DmmControllerV2Mi8ybbp.getInterestRateByDmmTokenAddress.call(addressQRXGbkp, {from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addressoqJNJSX = "0x0000000000000000000000000000000000000001"
		const addressEuYg4Gf = accounts[3]
		const addressCOHhc8T = accounts[3]
		const addressDXbtj8r = accounts[4]
		const addressaGeLM54 = accounts[0]
		const addressdv2OoIc = accounts[5]
		const addresszFzlLDC = accounts[3]
		const addresstM7Aft7 = accounts[3]
		const addressvfpLXqK = accounts[1]
		const uintCAvjKd4 = BigInt("983")
		const uintJHK97WZ = BigInt("1502")
		const addressUjf3yKh = accounts[0]
		const DmmControllerV2Mi8ybbp = await DmmControllerV2.new(addressoqJNJSX, addressEuYg4Gf, addressCOHhc8T, addressDXbtj8r, addressaGeLM54, addressdv2OoIc, addresszFzlLDC, addresstM7Aft7, addressvfpLXqK, uintCAvjKd4, uintJHK97WZ, addressUjf3yKh, {from: accounts[2]});
		const addressnFisSwH = accounts[1]
		const addressvYiOHjp = accounts[1]
		const addressJk6x7kf = accounts[0]
		const 
hyNYDY = await DmmControllerV2Mi8ybbp.setCollateralizationCalculator.call(addressnFisSwH, {from: accounts[3]});
		const addressyizh0tU = await DmmControllerV2Mi8ybbp.addPauser.call(addressvYiOHjp, {from: "0x0000000000000000000000000000000000000001"});
		const uintdbqKy3H = await DmmControllerV2Mi8ybbp.getInterestRateByDmmTokenAddress.call(addressJk6x7kf, {from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addressPzTpKqH = "0x0000000000000000000000000000000000000001"
		const addressWZTTe9o = accounts[3]
		const addresslvzHkFY = accounts[3]
		const addressfhImKCJ = accounts[4]
		const addressuhkxDeX = accounts[0]
		const addressW3nyrm0 = accounts[5]
		const addressWeAxAHX = accounts[3]
		const addressG4gJEma = accounts[3]
		const addressBAets0p = accounts[1]
		const uintHifvTA = BigInt("983")
		const uintGHPVeeb = BigInt("1502")
		const addressytzx7jy = accounts[0]
		const DmmControllerV2Mi8ybbp = await DmmControllerV2.new(addressPzTpKqH, addressWZTTe9o, addresslvzHkFY, addressfhImKCJ, addressuhkxDeX, addressW3nyrm0, addressWeAxAHX, addressG4gJEma, addressBAets0p, uintHifvTA, uintGHPVeeb, addressytzx7jy, {from: accounts[2]});
		const addressxF21WZz = accounts[0]
		const addressJZ4wbuv = accounts[0]
		const addressH2tJxu = await DmmControllerV2Mi8ybbp.getUnderlyingTokenForDmm.call(addressxF21WZz, {from: accounts[1]});
		const uintdbqKy3H = await DmmControllerV2Mi8ybbp.getInterestRateByDmmTokenAddress.call(addressJZ4wbuv, {from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addressqBA6dtG = "0x0000000000000000000000000000000000000001"
		const addressrJNd3PP = accounts[3]
		const addressb2uu1da = accounts[3]
		const addressWeTqQxN = accounts[4]
		const address16Gur5 = accounts[0]
		const addressv4jjgRG = accounts[5]
		const addressleXMurP = accounts[3]
		const addressS8wk1T = accounts[3]
		const addressfSDhmvX = accounts[1]
		const uintKaI4xQN = BigInt("983")
		const uintWnI2FGc = BigInt("1502")
		const addressrXFCQfM = accounts[0]
		const DmmControllerV2Mi8ybbp = await DmmControllerV2.new(addressqBA6dtG, addressrJNd3PP, addressb2uu1da, addressWeTqQxN, address16Gur5, addressv4jjgRG, addressleXMurP, addressS8wk1T, addressfSDhmvX, uintKaI4xQN, uintWnI2FGc, addressrXFCQfM, {from: accounts[2]});
		const addresshq4xFWn = accounts[1]
		const uintdbqKy3H = await DmmControllerV2Mi8ybbp.getInterestRateByDmmTokenAddress.call(addresshq4xFWn, {from: accounts[1]});
		await DmmControllerV2Mi8ybbp.pause.call({from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressLy6OWMS = "0x0000000000000000000000000000000000000001"
		const addressE7nBdYJ = accounts[3]
		const addressDW1CXW = accounts[3]
		const addressl0SYhmF = accounts[4]
		const addressyXyQ0Y = accounts[0]
		const addressQ8OSDO3 = accounts[5]
		const addressGPlR8Y4 = accounts[3]
		const addresssgCAX7P = accounts[3]
		const addressiNcA75x = accounts[1]
		const uintaQNoeDd = BigInt("983")
		const uintjBf8TdY = BigInt("1502")
		const addressbaFZmc2 = accounts[0]
		const DmmControllerV2Mi8ybbp = await DmmControllerV2.new(addressLy6OWMS, addressE7nBdYJ, addressDW1CXW, addressl0SYhmF, addressyXyQ0Y, addressQ8OSDO3, addressGPlR8Y4, addresssgCAX7P, addressiNcA75x, uintaQNoeDd, uintjBf8TdY, addressbaFZmc2, {from: accounts[2]});
		const addressvLIXBJc = accounts[2]
		const addressZnhjTTO = accounts[3]
		const uintYmvzDaN = await DmmControllerV2Mi8ybbp.getTokenIdFromDmmTokenAddress.call(addressvLIXBJc, {from: accounts[1]});
		await DmmControllerV2Mi8ybbp.whenPaused.call({from: accounts[4]});
		const uintdbqKy3H = await DmmControllerV2Mi8ybbp.getInterestRateByDmmTokenAddress.call(addressZnhjTTO, {from: accounts[1]});
		await DmmControllerV2Mi8ybbp.pause.call({from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressSz76S6R = "0x0000000000000000000000000000000000000001"
		const addressbnpEUKv = accounts[3]
		const addressoNjWwIH = accounts[3]
		const addressn6giQ7d = accounts[4]
		const addressx1po9Uu = accounts[0]
		const addressy9ytNmE = accounts[5]
		const addressNKpU3v = accounts[3]
		const addressXj4e0HX = accounts[3]
		const addressKpyx7fy = accounts[1]
		const uintFQPpoFp = BigInt("983")
		const uintJkZDleH = BigInt("1502")
		const addressIXfTk4q = accounts[0]
		const DmmControllerV2Mi8ybbp = await DmmControllerV2.new(addressSz76S6R, addressbnpEUKv, addressoNjWwIH, addressn6giQ7d, addressx1po9Uu, addressy9ytNmE, addressNKpU3v, addressXj4e0HX, addressKpyx7fy, uintFQPpoFp, uintJkZDleH, addressIXfTk4q, {from: accounts[2]});
		const uintNZ2Mphu = BigInt("385")
		const addressVQulrJL = accounts[2]
		const addressIF6gR8 = accounts[2]
		const addressCKnfxz = accounts[5]
		const uint64cfQy = BigInt("1827")
		const addressOjncooV = accounts[0]
		const uintzgPJRw1 = await DmmControllerV2Mi8ybbp.setMinReserveRatio.call(uintNZ2Mphu, {from: accounts[2]});
		const addressH2tJxu = await DmmControllerV2Mi8ybbp.getUnderlyingTokenForDmm.call(addressVQulrJL, {from: accounts[1]});
		await DmmControllerV2Mi8ybbp.nonReentrant.call({from: accounts[2]});
		const addressVcu17gj = await DmmControllerV2Mi8ybbp.setInterestRateInterface.call(addressIF6gR8, {from: "0x0000000000000000000000000000000000000001"});
		const addressZtetbxl = await DmmControllerV2Mi8ybbp.getUnderlyingTokenForDmm.call(addressCKnfxz, {from: accounts[4]});
		const uintIxtyx2 = await DmmControllerV2Mi8ybbp.requireIsPrimaryMarketNft.call(uint64cfQy, {from: accounts[1]});
		const uintdbqKy3H = await DmmControllerV2Mi8ybbp.getInterestRateByDmmTokenAddress.call(addressOjncooV, {from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addressEAuRuGi = "0x0000000000000000000000000000000000000001"
		const addressQdpUtR3 = accounts[3]
		const addressf9KqY1l = accounts[3]
		const addressz3fyTzg = accounts[4]
		const addressuycwTNb = accounts[0]
		const addressS3pRVk = accounts[5]
		const addressm1jUOnA = accounts[3]
		const addressLZIvqLQ = accounts[3]
		const addressTKW4vXO = accounts[1]
		const uintvKZ16X = BigInt("983")
		const uintfbq3PSp = BigInt("1502")
		const addressy8oik5H = accounts[0]
		const DmmControllerV2Mi8ybbp = await DmmControllerV2.new(addressEAuRuGi, addressQdpUtR3, addressf9KqY1l, addressz3fyTzg, addressuycwTNb, addressS3pRVk, addressm1jUOnA, addressLZIvqLQ, addressTKW4vXO, uintvKZ16X, uintfbq3PSp, addressy8oik5H, {from: accounts[2]});
		const addressza2g5Kh = accounts[3]
		const addressB97vTay = accounts[1]
		const addressnNsiWi4 = await DmmControllerV2Mi8ybbp.setInterestRateInterface.call(addressza2g5Kh, {from: accounts[2]});
		const uintdbqKy3H = await DmmControllerV2Mi8ybbp.getInterestRateByDmmTokenAddress.call(addressB97vTay, {from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addressDuyYp3b = "0x0000000000000000000000000000000000000001"
		const addressF23t6ML = accounts[3]
		const addressrMsnZDQ = accounts[3]
		const addresszMCY4z = accounts[4]
		const addressVkbeDKJ = accounts[0]
		const addressRqKp1ld = accounts[5]
		const addressrrz1nuA = accounts[3]
		const addresswMwklIp = accounts[3]
		const addresssz19jPZ = accounts[1]
		const uintBX9DTqT = BigInt("983")
		const uintsPjrrOd = BigInt("1502")
		const addressnMmvp9 = accounts[0]
		const DmmControllerV2Mi8ybbp = await DmmControllerV2.new(addressDuyYp3b, addressF23t6ML, addressrMsnZDQ, addresszMCY4z, addressVkbeDKJ, addressRqKp1ld, addressrrz1nuA, addresswMwklIp, addresssz19jPZ, uintBX9DTqT, uintsPjrrOd, addressnMmvp9, {from: accounts[2]});
		const addressQK6hKsP = accounts[1]
		const addressoUKorqo = await DmmControllerV2Mi8ybbp.owner.call({from: accounts[0]});
		const addressH2tJxu = await DmmControllerV2Mi8ybbp.getUnderlyingTokenForDmm.call(addressQK6hKsP, {from: accounts[1]});
		await DmmControllerV2Mi8ybbp.renounceOwnership.call({from: accounts[0]});
	});
})