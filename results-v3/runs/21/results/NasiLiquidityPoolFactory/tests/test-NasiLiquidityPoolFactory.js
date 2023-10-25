const NasiLiquidityPoolFactory = artifacts.require("NasiLiquidityPoolFactory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NasiLiquidityPoolFactory', (accounts) => {
	it('test for NasiLiquidityPoolFactory', async () => {
		const addresss112fOQ = accounts[2]
		const addressSFEa4NR = accounts[0]
		const uintgFuEE0u = BigInt("669")
		const uint9ErkIK = BigInt("878")
		const NasiLiquidityPoolFactoryRbJ9EqK = await NasiLiquidityPoolFactory.new(addresss112fOQ, addressSFEa4NR, uintgFuEE0u, uint9ErkIK, {from: accounts[1]});
		const uintduRpgJ6 = BigInt("1242")
		const addressJtRXpQD = accounts[2]
		const addressp8bAdch = accounts[3]
		const addressjQghYhd = accounts[3]
		const uintZOn5WYF = BigInt("1190")
		const addresspu2c8S5 = accounts[3]
		const boolSohzp0o = await NasiLiquidityPoolFactoryRbJ9EqK.transferFrom.call(addressp8bAdch, addressJtRXpQD, uintduRpgJ6, {from: accounts[4]});
		const addressBXhKjRu = await NasiLiquidityPoolFactoryRbJ9EqK.addPauser.call(addressjQghYhd, {from: "0x0000000000000000000000000000000000000001"});
		const booljUrdEgU = await NasiLiquidityPoolFactoryRbJ9EqK.transfer.call(addresspu2c8S5, uintZOn5WYF, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringqWCRRW = "hykybUzI5A"
		const stringTvmi0Qn = "GMPsE"
		const uintiq0scrT = BigInt("6")
		const NasiLiquidityPoolFactoryhAg1ds = await NasiLiquidityPoolFactory.new(stringqWCRRW, stringTvmi0Qn, uintiq0scrT, {from: accounts[4]});
		const uintbfawmoV = BigInt("2037")
		const addressVfOz6Fk = accounts[5]
		const uintHYiZ40h = BigInt("60")
		const addressR0hhvha = accounts[3]
		const uinthN7IV62 = BigInt("722")
		const uintMwHaYyo = BigInt("1692")
		const addressOh1d8Zh = accounts[0]
		const boola3hChNV = await NasiLiquidityPoolFactoryhAg1ds.mint.call(addressVfOz6Fk, uintbfawmoV, {from: accounts[4]});
		const boolWzxhILM = await NasiLiquidityPoolFactoryhAg1ds.decreaseAllowance.call(addressR0hhvha, uintHYiZ40h, {from: accounts[3]});
		const uint256AW76Ac3 = await NasiLiquidityPoolFactoryhAg1ds.leaveStaking.call(uinthN7IV62, {from: accounts[2]});
		const boolghxTSA1 = await NasiLiquidityPoolFactoryhAg1ds.increaseAllowance.call(addressOh1d8Zh, uintMwHaYyo, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringtHJ1nmn = "V985tNnJxCaZurDQht2qo3gGUGDQBbAHRkYHpOHnshvllQTOxUuHx2KNc"
		const stringCmjOti1 = "Ff4vi1dQRhohcmQZl6oKPhao5P9RiPGLDopAUxl9eBv9zegD56S1xs6pddaESjn5ynCFz6hk3M0ZETV8N7JRrwPOmCJrsPs"
		const uintIC5Fe3g = BigInt("87")
		const NasiLiquidityPoolFactoryWNahWQo = await NasiLiquidityPoolFactory.new(stringtHJ1nmn, stringCmjOti1, uintIC5Fe3g, {from: accounts[3]});
		const addressAaH0qt5 = accounts[5]
		const uintozxo3RL = BigInt("1402")
		const addressVvS1nZE = accounts[2]
		const addressXCBnFxa = accounts[2]
		const boolBDEngMr = await NasiLiquidityPoolFactoryWNahWQo.isPauser.call(addressAaH0qt5, {from: accounts[3]});
		const boolEjJiLvE = await NasiLiquidityPoolFactoryWNahWQo.transfer.call(addressVvS1nZE, uintozxo3RL, {from: accounts[4]});
		const boolqRkMdpf = await NasiLiquidityPoolFactoryWNahWQo.paused.call({from: accounts[2]});
		const addressEtIwoIk = await NasiLiquidityPoolFactoryWNahWQo.addMinter.call(addressXCBnFxa, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringJUcGyd7 = "E1YUCw"
		const stringmMI83c = "SxItR3aDPDmrCEgMvPHMIfTzpSl"
		const uintMB3LqKY = BigInt("232")
		const NasiLiquidityPoolFactoryuDDGIG = await NasiLiquidityPoolFactory.new(stringJUcGyd7, stringmMI83c, uintMB3LqKY, {from: accounts[5]});
		const uintLBQAjzY = BigInt("324")
		const addressFP6m0EJ = accounts[2]
		const booluDt6m06 = await NasiLiquidityPoolFactoryuDDGIG.decreaseAllowance.call(addressFP6m0EJ, uintLBQAjzY, {from: accounts[2]});
		await NasiLiquidityPoolFactoryuDDGIG.renouncePauser.call({from: accounts[3]});
		const uint8qsGfKa = await NasiLiquidityPoolFactoryuDDGIG.decimals.call({from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringy8rtH6s = "D1rQhA"
		const stringHV1kQl = "1IqtYrEiljHUxYzFiG41MbMbscOFEErhdEOsSej7WSvDyzHXrrUc5s2qMB4NJmeslMM2Kzvtpd5kwA6"
		const uint0c3GOm = BigInt("139")
		const NasiLiquidityPoolFactoryuvCgCQ = await NasiLiquidityPoolFactory.new(stringy8rtH6s, stringHV1kQl, uint0c3GOm, {from: accounts[1]});
		const addressCeghc7f = accounts[1]
		const addressthCRNLQ = accounts[2]
		const uint256jxCania = await NasiLiquidityPoolFactoryuvCgCQ.balanceOf.call(addressCeghc7f, {from: accounts[4]});
		await NasiLiquidityPoolFactoryuvCgCQ.onlyOwner.call({from: accounts[2]});
		const boolbP2fJB = await NasiLiquidityPoolFactoryuvCgCQ.isMinter.call(addressthCRNLQ, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringK62rVY = "F4Gb3NEZIuDV7CklOE7qX1I7jdxxQr0bwOLJfD1JY8naqdL9b9r2C7UDNUpEu43A4Gaceowjw4ZuUeciP"
		const stringeFJDXnK = "OBMYDgOxSw80UIRSu7hARj39hqf7elkUG2jIDQxAEEMugGYxaVbwsQSqMRMButRSmwoGDj3T7Z8oU9"
		const uintoZSIiPG = BigInt("177")
		const NasiLiquidityPoolFactorydVvBBI = await NasiLiquidityPoolFactory.new(stringK62rVY, stringeFJDXnK, uintoZSIiPG, {from: "0x0000000000000000000000000000000000000001"});
		const uintfwhvPrd = BigInt("799")
		const addressX85NQVn = accounts[2]
		const uintlROUmvp = BigInt("150")
		const addressSVrhvvA = accounts[3]
		const uinthDZggWy = BigInt("1382")
		const booleUx8myL = await NasiLiquidityPoolFactorydVvBBI.approve.call(addressX85NQVn, uintfwhvPrd, {from: accounts[4]});
		const boolVTKOtrw = await NasiLiquidityPoolFactorydVvBBI.decreaseAllowance.call(addressSVrhvvA, uintlROUmvp, {from: accounts[1]});
		const uint256tNLJCn0 = await NasiLiquidityPoolFactorydVvBBI.enterStaking.call(uinthDZggWy, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressUUvo4fB = accounts[2]
		const addressbMTyioA = accounts[3]
		const uintomiqU9R = BigInt("164")
		const uintIdmxaY3 = BigInt("1307")
		const NasiLiquidityPoolFactoryIbLtPZ6 = await NasiLiquidityPoolFactory.new(addressUUvo4fB, addressbMTyioA, uintomiqU9R, uintIdmxaY3, {from: accounts[1]});
		const uintN5W3nA1 = BigInt("1748")
		const boolhGKWawT = await NasiLiquidityPoolFactoryIbLtPZ6.isOwner.call({from: accounts[2]});
		const boolzAMXlSv = await NasiLiquidityPoolFactoryIbLtPZ6.isOwner.call({from: accounts[0]});
		await NasiLiquidityPoolFactoryIbLtPZ6.onlyOwner.call({from: accounts[1]});
		await NasiLiquidityPoolFactoryIbLtPZ6.onlyPauser.call({from: accounts[3]});
		const uint256b4AbjUo = await NasiLiquidityPoolFactoryIbLtPZ6.enterStaking.call(uintN5W3nA1, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressQt0rPqA = accounts[4]
		const addressKuy7EGI = accounts[2]
		const uintWEL6bJa = BigInt("442")
		const uintewqLmT4 = BigInt("1981")
		const NasiLiquidityPoolFactoryGQgUWTb = await NasiLiquidityPoolFactory.new(addressQt0rPqA, addressKuy7EGI, uintWEL6bJa, uintewqLmT4, {from: "0x0000000000000000000000000000000000000001"});
		const addresshylF6Ai = accounts[0]
		const addressksSisYO = accounts[3]
		await NasiLiquidityPoolFactoryGQgUWTb.onlyMinter.call({from: accounts[0]});
		const addressrYKyer = await NasiLiquidityPoolFactoryGQgUWTb.delegate.call(addresshylF6Ai, {from: accounts[0]});
		const boolodV6KOu = await NasiLiquidityPoolFactoryGQgUWTb.isMinter.call(addressksSisYO, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addresskzQCkwG = accounts[3]
		const addressquDUzyk = accounts[3]
		const uintoJ1atUR = BigInt("674")
		const uintt8XRdFM = BigInt("590")
		const NasiLiquidityPoolFactoryoa3mU3d = await NasiLiquidityPoolFactory.new(addresskzQCkwG, addressquDUzyk, uintoJ1atUR, uintt8XRdFM, {from: accounts[0]});
		const addressCAutD1y = accounts[3]
		const uintjxr5lRc = BigInt("1851")
		const addressJ3aEwTl = "0x0000000000000000000000000000000000000001"
		const uint1Fz0g9 = BigInt("743")
		const addresseOMEGEG = await NasiLiquidityPoolFactoryoa3mU3d.transferOwnership.call(addressCAutD1y, {from: accounts[0]});
		const stringRC28zHI = await NasiLiquidityPoolFactoryoa3mU3d.name.call({from: accounts[0]});
		await NasiLiquidityPoolFactoryoa3mU3d.renouncePauser.call({from: accounts[4]});
		const boolOsSCmoO = await NasiLiquidityPoolFactoryoa3mU3d.transfer.call(addressJ3aEwTl, uintjxr5lRc, {from: accounts[3]});
		const uint256tdvf351 = await NasiLiquidityPoolFactoryoa3mU3d.migrate.call(uint1Fz0g9, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const address7ZeJB7 = accounts[2]
		const addressoWGHt01 = accounts[0]
		const uintiu33KaJ = BigInt("669")
		const uintrav0v3s = BigInt("878")
		const NasiLiquidityPoolFactoryRbJ9EqK = await NasiLiquidityPoolFactory.new(address7ZeJB7, addressoWGHt01, uintiu33KaJ, uintrav0v3s, {from: accounts[1]});
		const uintQr36AK = BigInt("1900")
		const uintPoOZfp9 = BigInt("1214")
		const uintXIiiIIJ = BigInt("211")
		const addressoBiUnPq = accounts[1]
		const addressdzIt9RW = accounts[4]
		const uintD19iAbq = BigInt("1190")
		const addresseQeRECI = accounts[3]
		const uint256bGqyW4z = await NasiLiquidityPoolFactoryRbJ9EqK.withdraw.call(uintPoOZfp9, uintQr36AK, {from: accounts[1]});
		const addressHpdajhs = await NasiLiquidityPoolFactoryRbJ9EqK.burnFrom.call(addressoBiUnPq, uintXIiiIIJ, {from: accounts[4]});
		const addressBXhKjRu = await NasiLiquidityPoolFactoryRbJ9EqK.addPauser.call(addressdzIt9RW, {from: "0x0000000000000000000000000000000000000001"});
		const booljUrdEgU = await NasiLiquidityPoolFactoryRbJ9EqK.transfer.call(addresseQeRECI, uintD19iAbq, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringtg7KTqk = "m6Q"
		const stringykoMH0P = "9La1YXYVh3ja793LLzFjLii6HqigI5JTJpRP1TDGovWJ6KMl9tx8RjLgb13JOHXf"
		const uintYETTDn = BigInt("157")
		const NasiLiquidityPoolFactoryZta0ZPS = await NasiLiquidityPoolFactory.new(stringtg7KTqk, stringykoMH0P, uintYETTDn, {from: accounts[2]});
		const uintQp80Nur = BigInt("315")
		const stringnOrUnjA = await NasiLiquidityPoolFactoryZta0ZPS.symbol.call({from: accounts[2]});
		const uint256eIbttbC = await NasiLiquidityPoolFactoryZta0ZPS.migrate.call(uintQp80Nur, {from: accounts[0]});
		await NasiLiquidityPoolFactoryZta0ZPS.pause.call({from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringZoiZ6B = "eqc7lSFaG"
		const stringk5lGSGG = "svPM6MDloUHXknaWcvoUld8Jsm1UdG409j5m2UC8JEZkD3KOuTHr8U1xGNKc6M"
		const uintXcUcKVJ = BigInt("100")
		const NasiLiquidityPoolFactoryBHkehtl = await NasiLiquidityPoolFactory.new(stringZoiZ6B, stringk5lGSGG, uintXcUcKVJ, {from: accounts[0]});
		const uintVah64dI = BigInt("613")
		const addressRPMHUiC = accounts[0]
		const uinttN165Tj = BigInt("291")
		const uintbpK0DQ = BigInt("1775")
		const uint256MUZEJOm = await NasiLiquidityPoolFactoryBHkehtl.leaveStaking.call(uintVah64dI, {from: accounts[1]});
		const stringuqAkqd6 = await NasiLiquidityPoolFactoryBHkehtl.symbol.call({from: accounts[5]});
		const boolgSmUkDb = await NasiLiquidityPoolFactoryBHkehtl.isPauser.call(addressRPMHUiC, {from: accounts[2]});
		const uint256yzkEF8 = await NasiLiquidityPoolFactoryBHkehtl.withdraw.call(uintbpK0DQ, uinttN165Tj, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressHrhd5cM = accounts[2]
		const addresseruwSM9 = accounts[0]
		const uintPA3mDpo = BigInt("669")
		const uintVnn65z1 = BigInt("878")
		const NasiLiquidityPoolFactoryRbJ9EqK = await NasiLiquidityPoolFactory.new(addressHrhd5cM, addresseruwSM9, uintPA3mDpo, uintVnn65z1, {from: accounts[1]});
		const uintOjhM0yL = BigInt("1900")
		const uintJTDvWnx = BigInt("1191")
		const uintNZ9Ilbd = BigInt("1829")
		const addresspYi36ZF = accounts[0]
		const addressxZWjGV1 = accounts[2]
		const addressZo9UdDw = accounts[2]
		const uintpZGRs0S = BigInt("211")
		const addressEolUiF6 = accounts[2]
		const addressttQmuxh = accounts[3]
		const uintyKtDsV = BigInt("1190")
		const addresslqR6W8 = accounts[3]
		await NasiLiquidityPoolFactoryRbJ9EqK.renounceOwnership.call({from: accounts[3]});
		const uint256bGqyW4z = await NasiLiquidityPoolFactoryRbJ9EqK.withdraw.call(uintJTDvWnx, uintOjhM0yL, {from: accounts[1]});
		const boolqGbBHgT = await NasiLiquidityPoolFactoryRbJ9EqK.decreaseAllowance.call(addresspYi36ZF, uintNZ9Ilbd, {from: accounts[0]});
		await NasiLiquidityPoolFactoryRbJ9EqK.renounceOwnership.call({from: accounts[5]});
		const addressRYNxwQ = await NasiLiquidityPoolFactoryRbJ9EqK._delegate.call(addressZo9UdDw, addressxZWjGV1, {from: accounts[0]});
		const addressHpdajhs = await NasiLiquidityPoolFactoryRbJ9EqK.burnFrom.call(addressEolUiF6, uintpZGRs0S, {from: accounts[4]});
		const addressBXhKjRu = await NasiLiquidityPoolFactoryRbJ9EqK.addPauser.call(addressttQmuxh, {from: "0x0000000000000000000000000000000000000001"});
		const booljUrdEgU = await NasiLiquidityPoolFactoryRbJ9EqK.transfer.call(addresslqR6W8, uintyKtDsV, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressQiVMPrJ = accounts[2]
		const addressKK2ck0Z = accounts[0]
		const uinttHmSle = BigInt("669")
		const uintSNhZIlk = BigInt("878")
		const NasiLiquidityPoolFactoryRbJ9EqK = await NasiLiquidityPoolFactory.new(addressQiVMPrJ, addressKK2ck0Z, uinttHmSle, uintSNhZIlk, {from: accounts[1]});
		const uintILMn13h = BigInt("1965")
		const uintuAmNtQr = BigInt("1139")
		const uintifzSZHD = BigInt("1509")
		const uintcd1jMhQ = BigInt("1242")
		const addressJty9n6 = accounts[3]
		const addresstSc9fS2 = accounts[4]
		const uint256CYGFISB = await NasiLiquidityPoolFactoryRbJ9EqK.getBonusMultiplier.call(uintuAmNtQr, uintILMn13h, {from: accounts[1]});
		const uint256KVrw708 = await NasiLiquidityPoolFactoryRbJ9EqK.emergencyWithdraw.call(uintifzSZHD, {from: accounts[0]});
		const boolSohzp0o = await NasiLiquidityPoolFactoryRbJ9EqK.transferFrom.call(addresstSc9fS2, addressJty9n6, uintcd1jMhQ, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringBu6onf = "f4n"
		const stringKGZg0km = "PLpycsfaZCCjiouKuuwL84DGgdp"
		const uintz8TYe8C = BigInt("123")
		const NasiLiquidityPoolFactoryv5rLN1x = await NasiLiquidityPoolFactory.new(stringBu6onf, stringKGZg0km, uintz8TYe8C, {from: accounts[0]});
		const uintk09gfto = BigInt("1134")
		const uint256ItFb4jA = await NasiLiquidityPoolFactoryv5rLN1x.updatePool.call(uintk09gfto, {from: accounts[1]});
		const booleactJX = await NasiLiquidityPoolFactoryv5rLN1x.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await NasiLiquidityPoolFactoryv5rLN1x.massUpdatePools.call({from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressxS3G22g = accounts[4]
		const addressEAcHomB = accounts[1]
		const uintOED9ybH = BigInt("1472")
		const uint6myYmX = BigInt("629")
		const NasiLiquidityPoolFactoryzANaC3z = await NasiLiquidityPoolFactory.new(addressxS3G22g, addressEAcHomB, uintOED9ybH, uint6myYmX, {from: accounts[1]});
		const uintTGdr3mT = BigInt("1435")
		const uintIIwzJy = BigInt("309")
		const uint3P61cQ = BigInt("452")
		const addressEdTWyi2 = accounts[0]
		const uintxsNHG2j = BigInt("1991")
		const uintMVDp6IX = BigInt("869")
		const addressgQVHt4C = accounts[0]
		const addressGGPci3J = "0x0000000000000000000000000000000000000001"
		const uint256xuDALM = await NasiLiquidityPoolFactoryzANaC3z.deposit.call(uintIIwzJy, uintTGdr3mT, {from: accounts[3]});
		const boolb8rWS7Y = await NasiLiquidityPoolFactoryzANaC3z.mint.call(addressEdTWyi2, uint3P61cQ, {from: accounts[4]});
		const uint256ojBTqui = await NasiLiquidityPoolFactoryzANaC3z.burn.call(uintxsNHG2j, {from: accounts[4]});
		const boolgDmCrL8 = await NasiLiquidityPoolFactoryzANaC3z.mint.call(addressgQVHt4C, uintMVDp6IX, {from: accounts[1]});
		const booliDzRew = await NasiLiquidityPoolFactoryzANaC3z.isPauser.call(addressGGPci3J, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressYkBNazH = accounts[2]
		const addressh1SlyaU = accounts[0]
		const uintNX2WAv = BigInt("669")
		const uintFvDf7Ek = BigInt("878")
		const NasiLiquidityPoolFactoryRbJ9EqK = await NasiLiquidityPoolFactory.new(addressYkBNazH, addressh1SlyaU, uintNX2WAv, uintFvDf7Ek, {from: accounts[1]});
		const uintdhZ9SGr = BigInt("1965")
		const uintZuDxDpS = BigInt("1139")
		const uintNclEZfO = BigInt("624")
		const uintKoTOxf2 = BigInt("1509")
		const uintMFTVfdq = BigInt("1242")
		const addresss97TvhC = accounts[3]
		const addresst99ILiU = accounts[4]
		const uint256CYGFISB = await NasiLiquidityPoolFactoryRbJ9EqK.getBonusMultiplier.call(uintZuDxDpS, uintdhZ9SGr, {from: accounts[1]});
		const uint256RzjYWdv = await NasiLiquidityPoolFactoryRbJ9EqK.migrate.call(uintNclEZfO, {from: "0x0000000000000000000000000000000000000001"});
		const uint256KVrw708 = await NasiLiquidityPoolFactoryRbJ9EqK.emergencyWithdraw.call(uintKoTOxf2, {from: accounts[0]});
		await NasiLiquidityPoolFactoryRbJ9EqK.massUpdatePools.call({from: accounts[5]});
		const boolSohzp0o = await NasiLiquidityPoolFactoryRbJ9EqK.transferFrom.call(addresst99ILiU, addresss97TvhC, uintMFTVfdq, {from: accounts[4]});
		const booliUGiCwD = await NasiLiquidityPoolFactoryRbJ9EqK.paused.call({from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringvrFmhVC = "7uDF"
		const stringiCedZ1 = "mobMbTkUA3mZm0"
		const uintpXZVkIq = BigInt("93")
		const NasiLiquidityPoolFactoryo80xIQp = await NasiLiquidityPoolFactory.new(stringvrFmhVC, stringiCedZ1, uintpXZVkIq, {from: "0x0000000000000000000000000000000000000001"});
		await NasiLiquidityPoolFactoryo80xIQp.onlyOwner.call({from: accounts[3]});
		const boolbVzcA9v = await NasiLiquidityPoolFactoryo80xIQp.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringUNGRSkM = "WUmbtu65B3NxT44MbNXSDRekfH6z"
		const stringuV9HXur = "SuegmrsGeQA3W"
		const uintTQPE2v0 = BigInt("50")
		const NasiLiquidityPoolFactorySPphKeK = await NasiLiquidityPoolFactory.new(stringUNGRSkM, stringuV9HXur, uintTQPE2v0, {from: accounts[3]});
		const addressR3aeXq = accounts[5]
		const uintmURqRoq = BigInt("1065")
		const addressEiMK1U = accounts[4]
		const addressmUmXWa5 = accounts[3]
		const boolMhxo33m = await NasiLiquidityPoolFactorySPphKeK.isMinter.call(addressR3aeXq, {from: accounts[1]});
		const boolLbzdHNh = await NasiLiquidityPoolFactorySPphKeK.decreaseAllowance.call(addressEiMK1U, uintmURqRoq, {from: "0x0000000000000000000000000000000000000001"});
		const boolc6dcu89 = await NasiLiquidityPoolFactorySPphKeK.isPauser.call(addressmUmXWa5, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addresswCKO2mW = accounts[4]
		const addressHY99S0u = accounts[1]
		const uintZGWEJwm = BigInt("1472")
		const uinthOzHfST = BigInt("629")
		const NasiLiquidityPoolFactoryzANaC3z = await NasiLiquidityPoolFactory.new(addresswCKO2mW, addressHY99S0u, uintZGWEJwm, uinthOzHfST, {from: accounts[1]});
		const uintowoyVHI = BigInt("1321")
		const uintxUdqZYz = BigInt("1916")
		const uintWEgZkl = BigInt("1435")
		const uintLFkuY6g = BigInt("309")
		const uintlL1CuKR = BigInt("452")
		const addresszWSfUN = accounts[0]
		const uintMcMJaFh = BigInt("1991")
		const uintwjeloIi = BigInt("869")
		const addressg6wOVGV = accounts[0]
		const addressKk0YoQH = "0x0000000000000000000000000000000000000000"
		const uint256dUSTeKt = await NasiLiquidityPoolFactoryzANaC3z.getBonusMultiplier.call(uintxUdqZYz, uintowoyVHI, {from: "0x0000000000000000000000000000000000000001"});
		const uint256xuDALM = await NasiLiquidityPoolFactoryzANaC3z.deposit.call(uintLFkuY6g, uintWEgZkl, {from: accounts[3]});
		const boolb8rWS7Y = await NasiLiquidityPoolFactoryzANaC3z.mint.call(addresszWSfUN, uintlL1CuKR, {from: accounts[4]});
		const uint256ojBTqui = await NasiLiquidityPoolFactoryzANaC3z.burn.call(uintMcMJaFh, {from: accounts[4]});
		const boolgDmCrL8 = await NasiLiquidityPoolFactoryzANaC3z.mint.call(addressg6wOVGV, uintwjeloIi, {from: accounts[1]});
		const booliDzRew = await NasiLiquidityPoolFactoryzANaC3z.isPauser.call(addressKk0YoQH, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addresssAFvQAy = accounts[2]
		const addresshsufl6C = accounts[0]
		const uintK4fMlRk = BigInt("669")
		const uintUOYcQeO = BigInt("878")
		const NasiLiquidityPoolFactoryRbJ9EqK = await NasiLiquidityPoolFactory.new(addresssAFvQAy, addresshsufl6C, uintK4fMlRk, uintUOYcQeO, {from: accounts[1]});
		const uintE0gZHL6 = BigInt("1965")
		const uintBC6n8co = BigInt("1142")
		const uintTmPIqGs = BigInt("1412")
		const uint9K069l = BigInt("1509")
		const uintpTmpG0S = BigInt("1242")
		const addressHoVLDYY = accounts[4]
		const addresspihfimu = accounts[5]
		const uintQvOPhXT = BigInt("877")
		const addressHwGJi2 = accounts[3]
		const addressa4I2sq = accounts[4]
		const uint256CYGFISB = await NasiLiquidityPoolFactoryRbJ9EqK.getBonusMultiplier.call(uintBC6n8co, uintE0gZHL6, {from: accounts[1]});
		const uint256QhjlJNj = await NasiLiquidityPoolFactoryRbJ9EqK.updatePool.call(uintTmPIqGs, {from: accounts[1]});
		const uint256KVrw708 = await NasiLiquidityPoolFactoryRbJ9EqK.emergencyWithdraw.call(uint9K069l, {from: accounts[0]});
		await NasiLiquidityPoolFactoryRbJ9EqK.massUpdatePools.call({from: accounts[5]});
		const boolSohzp0o = await NasiLiquidityPoolFactoryRbJ9EqK.transferFrom.call(addresspihfimu, addressHoVLDYY, uintpTmpG0S, {from: accounts[4]});
		const booliUGiCwD = await NasiLiquidityPoolFactoryRbJ9EqK.paused.call({from: accounts[5]});
		const addressg5kgt0H = await NasiLiquidityPoolFactoryRbJ9EqK.burnFrom.call(addressHwGJi2, uintQvOPhXT, {from: accounts[1]});
		const boolmi6skoQ = await NasiLiquidityPoolFactoryRbJ9EqK.isMinter.call(addressa4I2sq, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringMRZ5K66 = "AQjJETVHRcw2g9tPebYjhjWzEzaCdNtvaqeP6FxrDrudBlWZRKabnDIuH5iRxySNpUae"
		const stringnTHzjJ4 = "TBD"
		const uintYYPLxyO = BigInt("43")
		const NasiLiquidityPoolFactoryOLLA0LY = await NasiLiquidityPoolFactory.new(stringMRZ5K66, stringnTHzjJ4, uintYYPLxyO, {from: accounts[0]});
		const uintMrtZ8Jg = BigInt("1307")
		const addressNKgLC0Z = accounts[2]
		const addressQVVTE5L = accounts[3]
		const uintaS1AGMZ = BigInt("1721")
		const boolouyr0Ku = await NasiLiquidityPoolFactoryOLLA0LY.increaseAllowance.call(addressNKgLC0Z, uintMrtZ8Jg, {from: accounts[1]});
		await NasiLiquidityPoolFactoryOLLA0LY.renounceOwnership.call({from: accounts[1]});
		const addressqQsBFUW = await NasiLiquidityPoolFactoryOLLA0LY.setMigrator.call(addressQVVTE5L, {from: accounts[0]});
		const uint256cC7QrmK = await NasiLiquidityPoolFactoryOLLA0LY.migrate.call(uintaS1AGMZ, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressBaYwsLJ = accounts[2]
		const addressmKJCuyT = accounts[0]
		const uintqILtiwK = BigInt("669")
		const uintuDLkuB5 = BigInt("878")
		const NasiLiquidityPoolFactoryRbJ9EqK = await NasiLiquidityPoolFactory.new(addressBaYwsLJ, addressmKJCuyT, uintqILtiwK, uintuDLkuB5, {from: accounts[1]});
		const uintbHZh7pQ = BigInt("305")
		const uintvDchhjA = BigInt("877")
		const uintiWwWHQo = BigInt("1608")
		const addressYuwuP1C = accounts[4]
		const uintLKB7YS = BigInt("1233")
		const addressrXCODqs = accounts[4]
		const addressYy9redA = accounts[4]
		await NasiLiquidityPoolFactoryRbJ9EqK.massUpdatePools.call({from: accounts[0]});
		await NasiLiquidityPoolFactoryRbJ9EqK.unpause.call({from: accounts[3]});
		const 
NF3hxt1 = await NasiLiquidityPoolFactoryRbJ9EqK._writeCheckpoint.call(addressYuwuP1C, uintiWwWHQo, uintvDchhjA, uintbHZh7pQ, {from: "0x0000000000000000000000000000000000000001"});
		const boolSohzp0o = await NasiLiquidityPoolFactoryRbJ9EqK.transferFrom.call(addressYy9redA, addressrXCODqs, uintLKB7YS, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressG3hFMrb = accounts[2]
		const addresstbltNO7 = accounts[0]
		const uintuI7ojL8 = BigInt("669")
		const uintCJppbAX = BigInt("878")
		const NasiLiquidityPoolFactoryRbJ9EqK = await NasiLiquidityPoolFactory.new(addressG3hFMrb, addresstbltNO7, uintuI7ojL8, uintCJppbAX, {from: accounts[1]});
		const uinthTFC59G = BigInt("2017")
		const addressOoO6DR = accounts[0]
		const uintxfaZr0A = BigInt("1233")
		const addressrrvc7m = accounts[2]
		const addressUcEBqYL = accounts[1]
		const addressV89cXE1 = accounts[3]
		const uint256C0K34y = await NasiLiquidityPoolFactoryRbJ9EqK.enterStaking.call(uinthTFC59G, {from: accounts[3]});
		const boolHpemEqq = await NasiLiquidityPoolFactoryRbJ9EqK.isMinter.call(addressOoO6DR, {from: accounts[4]});
		const boolSohzp0o = await NasiLiquidityPoolFactoryRbJ9EqK.transferFrom.call(addressUcEBqYL, addressrrvc7m, uintxfaZr0A, {from: accounts[4]});
		const addressXw2uzJ6 = await NasiLiquidityPoolFactoryRbJ9EqK.delegate.call(addressV89cXE1, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringL0HoAvk = "3CPjgNOXt8pItJOXpP8TR4Uyy56jrWfcRh6JGnXTSGbdAJF7e1C6JPEBbzmY5q"
		const stringSrDv0vX = "snNg8eOXtBY1Bepv65K1ldmuVS11QtHIQj2sOEnDeuRDdXvDwVxdg4PepdgFwmGKXYQJhLzjfY3tROXtVeBu4Q4T6xGJH2zP9"
		const uintupockC6 = BigInt("141")
		const NasiLiquidityPoolFactoryeXSOlEb = await NasiLiquidityPoolFactory.new(stringL0HoAvk, stringSrDv0vX, uintupockC6, {from: "0x0000000000000000000000000000000000000001"});
		const address31lFF0 = accounts[0]
		const uintrDxIue = BigInt("833")
		const addressfRtoefu = "0x0000000000000000000000000000000000000001"
		const uintvzkCvmK = BigInt("1649")
		const addressFrN5Uoo = accounts[1]
		const uint256YhH9Vu = await NasiLiquidityPoolFactoryeXSOlEb.pendingNasi.call(uintrDxIue, address31lFF0, {from: accounts[0]});
		await NasiLiquidityPoolFactoryeXSOlEb.whenNotPaused.call({from: accounts[1]});
		const uint256d0i5WyL = await NasiLiquidityPoolFactoryeXSOlEb.pendingNasi.call(uintvzkCvmK, addressfRtoefu, {from: accounts[3]});
		const uint256AUA2hY = await NasiLiquidityPoolFactoryeXSOlEb.getCurrentVotes.call(addressFrN5Uoo, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressDtgO1Nh = accounts[2]
		const addressQXwa2pr = accounts[0]
		const uintaAe9Ptw = BigInt("669")
		const uintV1CSUtv = BigInt("878")
		const NasiLiquidityPoolFactoryRbJ9EqK = await NasiLiquidityPoolFactory.new(addressDtgO1Nh, addressQXwa2pr, uintaAe9Ptw, uintV1CSUtv, {from: accounts[1]});
		const addressLJhljix = accounts[4]
		const uintVKuQCUl = BigInt("666")
		const uintbDQgZb5 = BigInt("1252")
		const addressJiljHbQ = accounts[0]
		const addressPb2TLcW = accounts[5]
		const uint256ztDqA7V = await NasiLiquidityPoolFactoryRbJ9EqK.pendingNasi.call(uintVKuQCUl, addressLJhljix, {from: accounts[0]});
		const boolSohzp0o = await NasiLiquidityPoolFactoryRbJ9EqK.transferFrom.call(addressPb2TLcW, addressJiljHbQ, uintbDQgZb5, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringwewgDs8 = "XAwPXs8BUW5Qb7hH6iDI1QUF6WeoBwvYUTkIXH0yXEDd"
		const stringSQq2j9S = "C85ItzA3BzuSoqMaMd0qLFLyxBZJ7YPrv7PdsT5L6sW7f44nCvd7cEkL6nWlTzA"
		const uintmQFaeO = BigInt("190")
		const NasiLiquidityPoolFactoryINz0QP = await NasiLiquidityPoolFactory.new(stringwewgDs8, stringSQq2j9S, uintmQFaeO, {from: accounts[4]});
		const uintYmY5PLm = BigInt("1350")
		const addressNpZPWb = accounts[4]
		const uint8mvSDm5C = await NasiLiquidityPoolFactoryINz0QP.decimals.call({from: accounts[0]});
		const uint256NFYpXGS = await NasiLiquidityPoolFactoryINz0QP.emergencyWithdraw.call(uintYmY5PLm, {from: accounts[1]});
		await NasiLiquidityPoolFactoryINz0QP.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const addressLdx0RPa = await NasiLiquidityPoolFactoryINz0QP.setMigrator.call(addressNpZPWb, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringEbDh1V5 = "SMApBTwftRQJOPNfVr6JZvzOsRHE172m9NQSnMQeQWB29yS416Qy"
		const stringl6lYKXN = "YQYAJAEHDagg5gld1y5ZpH1hboqEL6OmM7LO4R7IHdC4IieegzjX4kB5WC2bN3QefuKaS6TTRLQT9wvRFU2O"
		const uinthRYKHa2 = BigInt("2")
		const NasiLiquidityPoolFactorytLKjAo = await NasiLiquidityPoolFactory.new(stringEbDh1V5, stringl6lYKXN, uinthRYKHa2, {from: accounts[0]});
		const addressZffVeY5 = accounts[2]
		const uintonXksX = BigInt("1746")
		const addressvo3955V = accounts[1]
		const boolh3cOhJM = await NasiLiquidityPoolFactorytLKjAo.isMinter.call(addressZffVeY5, {from: accounts[5]});
		const boolbpXwdQ5 = await NasiLiquidityPoolFactorytLKjAo.mint.call(addressvo3955V, uintonXksX, {from: accounts[5]});
	});
})