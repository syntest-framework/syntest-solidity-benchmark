const DmmControllerV2 = artifacts.require("DmmControllerV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DmmControllerV2', (accounts) => {
	it('test for DmmControllerV2', async () => {
		const addressW6uBdNk = accounts[4]
		const addressSHmd5ij = accounts[0]
		const addressYHprkx = accounts[5]
		const addresshRulGL4 = accounts[3]
		const addressdNn8G4q = accounts[1]
		const addressve6diYu = accounts[3]
		const addressOnTxsj3 = accounts[4]
		const addressrgbiMKv = accounts[0]
		const addresskPuCvxz = accounts[2]
		const uintBiId06g = BigInt("1775")
		const uintqr8RrnC = BigInt("1192")
		const addressJYesJrl = accounts[3]
		const DmmControllerV2auhNUmy = await DmmControllerV2.new(addressW6uBdNk, addressSHmd5ij, addressYHprkx, addresshRulGL4, addressdNn8G4q, addressve6diYu, addressOnTxsj3, addressrgbiMKv, addresskPuCvxz, uintBiId06g, uintqr8RrnC, addressJYesJrl, {from: accounts[5]});
		const addressfybAyI = accounts[2]
		const addresszYC2A62 = accounts[0]
		const uintNyoDbGX = await DmmControllerV2auhNUmy.getTotalCollateralization.call({from: accounts[4]});
		const 
XtfWKh6 = await DmmControllerV2auhNUmy.transferGuardian.call(addressfybAyI, {from: accounts[0]});
		const addressThvfNfL = await DmmControllerV2auhNUmy.setOffChainAssetValuator.call(addresszYC2A62, {from: accounts[1]});
		const addresshMqlXKh = await DmmControllerV2auhNUmy.guardian.call({from: accounts[2]});
	});

	it('test for DmmControllerV2', async () => {
		const DmmControllerV2JpeuNWd = await DmmControllerV2.new({from: accounts[3]});
		const uint7dnlOD = BigInt("1777")
		const uintN5GqDx = BigInt("123")
		const uinttVzIHF1 = BigInt("1340")
		const uintUgaFWVB = BigInt("1125")
		const boolARGrKrB = await DmmControllerV2JpeuNWd.isMarketEnabledByDmmTokenId.call(uint7dnlOD, {from: accounts[5]});
		const 
tCpHGov = await DmmControllerV2JpeuNWd.adminWithdrawFunds.call(uinttVzIHF1, uintN5GqDx, {from: accounts[3]});
		const booly9fRC9f = await DmmControllerV2JpeuNWd.isMarketEnabledByDmmTokenId.call(uintUgaFWVB, {from: accounts[5]});
	});

	it('test for DmmControllerV2', async () => {
		const addressKnclcFt = accounts[3]
		const addressJyZ5DZ = accounts[0]
		const addresstPGKonI = accounts[0]
		const addressAD5uVD9 = accounts[4]
		const addressW6pgttA = "0x0000000000000000000000000000000000000001"
		const addressreH7a4s = accounts[3]
		const addressyi28yky = accounts[2]
		const addressu1f8V82 = accounts[4]
		const addressJDbcJq = accounts[0]
		const uintQwEQiQ = BigInt("913")
		const uintZLVMVnK = BigInt("1633")
		const addressfKKlMro = accounts[4]
		const DmmControllerV2uMJjeHn = await DmmControllerV2.new(addressKnclcFt, addressJyZ5DZ, addresstPGKonI, addressAD5uVD9, addressW6pgttA, addressreH7a4s, addressyi28yky, addressu1f8V82, addressJDbcJq, uintQwEQiQ, uintZLVMVnK, addressfKKlMro, {from: accounts[0]});
		const addressRPu4WyI = "0x0000000000000000000000000000000000000001"
		const addressr8yRkCe = accounts[3]
		const addresszWXzdg = accounts[2]
		await DmmControllerV2uMJjeHn.onlyOwnerOrGuardian.call({from: accounts[0]});
		const uintfHsefAe = await DmmControllerV2uMJjeHn.getExchangeRateByUnderlying.call(addressRPu4WyI, {from: accounts[0]});
		const addressDSQs9sp = await DmmControllerV2uMJjeHn.transferOwnership.call(addressr8yRkCe, {from: accounts[3]});
		const addressek46Kyf = await DmmControllerV2uMJjeHn.addPauser.call(addresszWXzdg, {from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addressUgVr0t6 = "0x0000000000000000000000000000000000000001"
		const addressaUzkKJ1 = accounts[3]
		const addressmCCLkT = accounts[3]
		const addressytsvapq = accounts[1]
		const addressW9gAkiA = accounts[1]
		const address9xZ3wL = accounts[5]
		const addresszIZwJ8Y = accounts[4]
		const addressXe4bHNZ = accounts[2]
		const addressdLoUXyT = accounts[2]
		const uintenOuKce = BigInt("514")
		const uintzCWhCYd = BigInt("608")
		const address1g5ahp = accounts[0]
		const DmmControllerV2Glt0wg = await DmmControllerV2.new(addressUgVr0t6, addressaUzkKJ1, addressmCCLkT, addressytsvapq, addressW9gAkiA, address9xZ3wL, addresszIZwJ8Y, addressXe4bHNZ, addressdLoUXyT, uintenOuKce, uintzCWhCYd, address1g5ahp, {from: accounts[0]});
		const addresskK7u6c5 = "0x0000000000000000000000000000000000000001"
		const uintUiFy78V = BigInt("611")
		const uintMEetD96 = BigInt("1216")
		const 
va6BoUW = await DmmControllerV2Glt0wg.setCollateralizationCalculator.call(addresskK7u6c5, {from: accounts[1]});
		const 
TkHE8h = await DmmControllerV2Glt0wg.increaseTotalSupply.call(uintMEetD96, uintUiFy78V, {from: accounts[1]});
		const addressu7yzYvw = await DmmControllerV2Glt0wg.owner.call({from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addresslZDd8df = accounts[1]
		const addresszy0TNsK = accounts[2]
		const addressovYTeo = accounts[2]
		const addresspWol0bo = accounts[0]
		const addressiuTEgiY = accounts[4]
		const addresslgzKOdd = accounts[3]
		const addressljl7FRw = accounts[4]
		const addressrDj5YwT = accounts[1]
		const addresshsTndNk = accounts[4]
		const uintFHEq5Xv = BigInt("1931")
		const uintUDsT9fY = BigInt("560")
		const addressO6YZH3 = accounts[2]
		const DmmControllerV2j0k46OH = await DmmControllerV2.new(addresslZDd8df, addresszy0TNsK, addressovYTeo, addresspWol0bo, addressiuTEgiY, addresslgzKOdd, addressljl7FRw, addressrDj5YwT, addresshsTndNk, uintFHEq5Xv, uintUDsT9fY, addressO6YZH3, {from: accounts[1]});
		const uintpeiSQx = BigInt("1110")
		const uint502Dvb = BigInt("1785")
		const addresszuSwyvQ = accounts[5]
		const addressNEWdIpw = accounts[0]
		const 
Idpz2Bm = await DmmControllerV2j0k46OH.decreaseTotalSupply.call(uint502Dvb, uintpeiSQx, {from: accounts[2]});
		await DmmControllerV2j0k46OH.unpause.call({from: accounts[0]});
		const 
MBiaQrJ = await DmmControllerV2j0k46OH.setCollateralizationCalculator.call(addresszuSwyvQ, {from: accounts[1]});
		await DmmControllerV2j0k46OH.requireIsStakingPurchaser.call({from: accounts[2]});
		const uintLkm2Xgi = await DmmControllerV2j0k46OH.getExchangeRateByUnderlying.call(addressNEWdIpw, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressy6FtPse = accounts[1]
		const addressuvKeCDx = accounts[2]
		const addressVdzbKq = accounts[3]
		const addressMRDGG1 = accounts[1]
		const addresskAziYym = accounts[2]
		const addressvWGpGx9 = accounts[4]
		const addressc8B0oBU = accounts[3]
		const addressI4UbCRy = accounts[0]
		const addressdKaE2r = accounts[5]
		const uintupjMGQX = BigInt("172")
		const uintbETWIRu = BigInt("605")
		const addressKlR9im = accounts[3]
		const DmmControllerV2ivELbc = await DmmControllerV2.new(addressy6FtPse, addressuvKeCDx, addressVdzbKq, addressMRDGG1, addresskAziYym, addressvWGpGx9, addressc8B0oBU, addressI4UbCRy, addressdKaE2r, uintupjMGQX, uintbETWIRu, addressKlR9im, {from: "0x0000000000000000000000000000000000000001"});
		const uintjEvrew4 = BigInt("1240")
		const uintFd7psRd = BigInt("172")
		const addressoQe3ey4 = accounts[4]
		const uintnBXFX1L = await DmmControllerV2ivELbc.enableMarket.call(uintjEvrew4, {from: accounts[0]});
		const uintbIntHA4 = await DmmControllerV2ivELbc.requireCanWithdrawFunds.call(uintFd7psRd, {from: accounts[0]});
		const 
LeSDlTi = await DmmControllerV2ivELbc.setCollateralizationCalculator.call(addressoQe3ey4, {from: "0x0000000000000000000000000000000000000001"});
		await DmmControllerV2ivELbc.nonReentrant.call({from: accounts[4]});
		await DmmControllerV2ivELbc.onlyBlacklister.call({from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addressjHV5J3t = "0x0000000000000000000000000000000000000001"
		const addressooXjsB = accounts[3]
		const addresstHmH90 = accounts[2]
		const addressXimFwt = accounts[1]
		const addresspKKrrZv = accounts[1]
		const addressdLkHnnp = "0x0000000000000000000000000000000000000001"
		const addressF7MN3v = accounts[2]
		const addressPOxj8Ul = accounts[3]
		const addressRC6vsDq = accounts[5]
		const uintKh4UGiU = BigInt("624")
		const uintgq6rRza = BigInt("704")
		const addressw2t1KEg = accounts[5]
		const DmmControllerV2QxBm7OJ = await DmmControllerV2.new(addressjHV5J3t, addressooXjsB, addresstHmH90, addressXimFwt, addresspKKrrZv, addressdLkHnnp, addressF7MN3v, addressPOxj8Ul, addressRC6vsDq, uintKh4UGiU, uintgq6rRza, addressw2t1KEg, {from: accounts[1]});
		const addressivaHTQq = accounts[3]
		const uintfO2yMNJ = await DmmControllerV2QxBm7OJ.getInterestRateByUnderlyingTokenAddress.call(addressivaHTQq, {from: accounts[4]});
		await DmmControllerV2QxBm7OJ.initializer.call({from: "0x0000000000000000000000000000000000000001"});
		await DmmControllerV2QxBm7OJ.renounceGuardian.call({from: accounts[2]});
	});

	it('test for DmmControllerV2', async () => {
		const addressyyFrK3 = accounts[1]
		const addresst8YunrC = accounts[2]
		const addressZs5Xf5d = accounts[2]
		const addresspd5vjZA = accounts[0]
		const addressQLCFSBG = accounts[4]
		const addressPysyiu9 = accounts[3]
		const addressF4SJNZ = accounts[4]
		const addressX14vVap = accounts[1]
		const addresssmL4dPf = accounts[4]
		const uintaeeqNle = BigInt("1931")
		const uintjIubThr = BigInt("560")
		const addressxdL95k5 = accounts[2]
		const DmmControllerV2j0k46OH = await DmmControllerV2.new(addressyyFrK3, addresst8YunrC, addressZs5Xf5d, addresspd5vjZA, addressQLCFSBG, addressPysyiu9, addressF4SJNZ, addressX14vVap, addresssmL4dPf, uintaeeqNle, uintjIubThr, addressxdL95k5, {from: accounts[1]});
		const addressifHfPIL = accounts[5]
		const addressXuu1XLt = accounts[0]
		await DmmControllerV2j0k46OH.unpause.call({from: accounts[0]});
		const 
MBiaQrJ = await DmmControllerV2j0k46OH.setCollateralizationCalculator.call(addressifHfPIL, {from: accounts[1]});
		await DmmControllerV2j0k46OH.requireIsStakingPurchaser.call({from: accounts[2]});
		const uintLkm2Xgi = await DmmControllerV2j0k46OH.getExchangeRateByUnderlying.call(addressXuu1XLt, {from: accounts[4]});
	});
})