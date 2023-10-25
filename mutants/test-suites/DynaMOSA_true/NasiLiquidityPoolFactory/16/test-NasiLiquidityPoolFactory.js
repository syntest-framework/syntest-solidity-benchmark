const NasiLiquidityPoolFactory = artifacts.require("NasiLiquidityPoolFactory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NasiLiquidityPoolFactory', (accounts) => {
	it('test for NasiLiquidityPoolFactory', async () => {
		const stringCJmjoPy = "mbUXUQalsC2FVPs6RWkO26yhBkBoxgWfXGeV0msEr61Gm9g8lzKggKXo7gbHfHjRHGvHrsnlc"
		const stringa0QW1QN = "Fo61UplSvg"
		const uintDAX1Z7O = BigInt("124")
		const NasiLiquidityPoolFactorykEoaAx6 = await NasiLiquidityPoolFactory.new(stringCJmjoPy, stringa0QW1QN, uintDAX1Z7O, {from: accounts[2]});
		const uintT97IL5Q = BigInt("763")
		const uintpU1TrG = BigInt("129")
		const uintZoakAG0 = BigInt("2000")
		const addressNpaLQFO = "0x0000000000000000000000000000000000000001"
		const addresswferuZ = accounts[4]
		const addressnIgJ4Ni = accounts[3]
		const addressMhHSov4 = accounts[4]
		const uintqpcmZ85 = BigInt("1054")
		const addressAQUKw0C = accounts[3]
		const addresstYQgfJQ = accounts[5]
		const uint256f8388f2 = await NasiLiquidityPoolFactorykEoaAx6.withdraw.call(uintpU1TrG, uintT97IL5Q, {from: accounts[3]});
		const uint256k2sOou0 = await NasiLiquidityPoolFactorykEoaAx6.enterStaking.call(uintZoakAG0, {from: accounts[0]});
		const uint256zzuMlIC = await NasiLiquidityPoolFactorykEoaAx6.allowance.call(addresswferuZ, addressNpaLQFO, {from: accounts[1]});
		const addressZPOPvTI = await NasiLiquidityPoolFactorykEoaAx6._delegate.call(addressMhHSov4, addressnIgJ4Ni, {from: "0x0000000000000000000000000000000000000001"});
		const boolvkAdRlA = await NasiLiquidityPoolFactorykEoaAx6.transferFrom.call(addresstYQgfJQ, addressAQUKw0C, uintqpcmZ85, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringvHUjyiX = "x5iJ65uEvpOHwcXN9phFzzXbK4DLj1VkpUupBfEJlVKT6wcQjRx8PQVc7YDF4FJXvIrHWaTgJgF"
		const stringatKOSSY = "zvOFbRUgR1PnEPLYnymMq9YLIJeVeHjDez5xpSx9H4XM9Dkrh7"
		const uintFKbwxmE = BigInt("175")
		const NasiLiquidityPoolFactoryplwD0ZX = await NasiLiquidityPoolFactory.new(stringvHUjyiX, stringatKOSSY, uintFKbwxmE, {from: accounts[0]});
		const addressKJz5u5g = "0x0000000000000000000000000000000000000001"
		const uintpaUe4Hf = BigInt("732")
		const uintnJh9KNi = BigInt("2017")
		const uintyEGf5K5 = BigInt("1716")
		const addressYkd3pLN = accounts[4]
		const addressafONsgY = accounts[0]
		const addressrpLUdcZ = accounts[5]
		const uint27iyYL = BigInt("1713")
		const addressrmhwvg5 = accounts[4]
		const addressbyvIibq = await NasiLiquidityPoolFactoryplwD0ZX.owner.call({from: accounts[3]});
		const uint256sWDN8Nn = await NasiLiquidityPoolFactoryplwD0ZX.balanceOf.call(addressKJz5u5g, {from: "0x0000000000000000000000000000000000000001"});
		const 
jQZVuHv = await NasiLiquidityPoolFactoryplwD0ZX._writeCheckpoint.call(addressYkd3pLN, uintyEGf5K5, uintnJh9KNi, uintpaUe4Hf, {from: accounts[1]});
		const addressighQnyE = await NasiLiquidityPoolFactoryplwD0ZX.setMigrator.call(addressafONsgY, {from: accounts[3]});
		const addressN7hMJSq = await NasiLiquidityPoolFactoryplwD0ZX.addMinter.call(addressrpLUdcZ, {from: "0x0000000000000000000000000000000000000001"});
		const boolWBdqk6R = await NasiLiquidityPoolFactoryplwD0ZX.mint.call(addressrmhwvg5, uint27iyYL, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressTbrrLno = accounts[0]
		const addresszXEfHvN = accounts[1]
		const uintybMrets = BigInt("815")
		const uintKG85Zae = BigInt("1964")
		const NasiLiquidityPoolFactorynOnsJ3z = await NasiLiquidityPoolFactory.new(addressTbrrLno, addresszXEfHvN, uintybMrets, uintKG85Zae, {from: accounts[2]});
		const uintuvsPcd = BigInt("743")
		const addressnXFuFzp = accounts[1]
		const boolPWBLWPP = await NasiLiquidityPoolFactorynOnsJ3z.transfer.call(addressnXFuFzp, uintuvsPcd, {from: accounts[3]});
		await NasiLiquidityPoolFactorynOnsJ3z.onlyOwner.call({from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressNTPRJ5Z = accounts[4]
		const addresszM8mCwj = accounts[0]
		const uintwQKIYmE = BigInt("907")
		const uintivN4WoM = BigInt("1831")
		const NasiLiquidityPoolFactoryV2FmtZZ = await NasiLiquidityPoolFactory.new(addressNTPRJ5Z, addresszM8mCwj, uintwQKIYmE, uintivN4WoM, {from: accounts[4]});
		const addressudVD0h = accounts[3]
		const uintMGmgQKf = BigInt("586")
		const addressonIg8ya = accounts[1]
		const uintzAOI6jh = BigInt("1702")
		const uint256ypDVTqv = await NasiLiquidityPoolFactoryV2FmtZZ.pendingNasi.call(uintMGmgQKf, addressudVD0h, {from: accounts[1]});
		await NasiLiquidityPoolFactoryV2FmtZZ.pause.call({from: accounts[0]});
		const addressocLLVb = await NasiLiquidityPoolFactoryV2FmtZZ.addMinter.call(addressonIg8ya, {from: accounts[0]});
		const uint256MgqnYYh = await NasiLiquidityPoolFactoryV2FmtZZ.enterStaking.call(uintzAOI6jh, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringZMk5zt6 = "uBFr3IlaJ6vhWe5HHcOOh3H8aY4uHntc"
		const stringRYJ9bX = "OobKX1tVyHEPOI2bzodr"
		const uint28gdZH = BigInt("26")
		const NasiLiquidityPoolFactorycWUT6i = await NasiLiquidityPoolFactory.new(stringZMk5zt6, stringRYJ9bX, uint28gdZH, {from: accounts[4]});
		const uinthJV5qFS = BigInt("1285")
		const addressOvkm86p = accounts[1]
		const byteGXUUex0 = "0x18040e1204111006120517190d03090d011b0b0d100d0c0e1c070b0320140e1e"
		const bytegBb9nrm = "0x0c060c010f1d17041f0a07191b1d130f0a01110c1a0f050f12190b0511140d17"
		const uintLdRAgwz = BigInt("200")
		const uintlLEguC2 = BigInt("1802")
		const uint9dm6YB = BigInt("242")
		const addressIOhQfau = accounts[0]
		const uintuSfbSpO = BigInt("1827")
		const addressZQx5NiR = accounts[4]
		const uintwSmn6ln = BigInt("514")
		const uintlGUsDmB = BigInt("1284")
		const boolwcgYih9 = await NasiLiquidityPoolFactorycWUT6i.transfer.call(addressOvkm86p, uinthJV5qFS, {from: accounts[4]});
		const 
s5TKvky = await NasiLiquidityPoolFactorycWUT6i.delegateBySig.call(addressIOhQfau, uint9dm6YB, uintlLEguC2, uintLdRAgwz, bytegBb9nrm, byteGXUUex0, {from: accounts[2]});
		const boolqeuHnue = await NasiLiquidityPoolFactorycWUT6i.decreaseAllowance.call(addressZQx5NiR, uintuSfbSpO, {from: accounts[1]});
		const uint256sxn4O6a = await NasiLiquidityPoolFactorycWUT6i.enterStaking.call(uintwSmn6ln, {from: accounts[4]});
		const uint256gF6rYV8 = await NasiLiquidityPoolFactorycWUT6i.burn.call(uintlGUsDmB, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressRUhYxg = accounts[0]
		const addresssHFQWgd = accounts[1]
		const uintQb6lyzP = BigInt("750")
		const uinty006Qhq = BigInt("95")
		const NasiLiquidityPoolFactoryMpyMsUO = await NasiLiquidityPoolFactory.new(addressRUhYxg, addresssHFQWgd, uintQb6lyzP, uinty006Qhq, {from: accounts[5]});
		await NasiLiquidityPoolFactoryMpyMsUO.renounceOwnership.call({from: accounts[4]});
		await NasiLiquidityPoolFactoryMpyMsUO.onlyMinter.call({from: accounts[2]});
		const stringmVle0JB = await NasiLiquidityPoolFactoryMpyMsUO.name.call({from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringEaUQeOF = "CFPIduIrqXXOPQBgfHV7pI6UUBvryFENUXm7Ncx"
		const stringQgp21JQ = "dycZCbhCjREFQrZ7l45OZJJwXbBbrUUiirXJOrrdPGNyBQBaNJ1lfM87nh145aQEkQrqW3WBkkVMZCnf"
		const uintz7dUFl = BigInt("11")
		const NasiLiquidityPoolFactoryCrem2sS = await NasiLiquidityPoolFactory.new(stringEaUQeOF, stringQgp21JQ, uintz7dUFl, {from: accounts[5]});
		const addressdkemjAp = accounts[3]
		const uintHtl0IhY = BigInt("2023")
		const addresswCff8sY = accounts[0]
		const uintndOSh2T = BigInt("1792")
		const addressyCZE1c = accounts[3]
		const uintKaJ16pM = BigInt("674")
		const uintc5kHnMN = BigInt("1137")
		const addressOkOrp3w = accounts[1]
		const addressLyHQ7wa = await NasiLiquidityPoolFactoryCrem2sS.setMigrator.call(addressdkemjAp, {from: accounts[4]});
		const bool4w6PGO = await NasiLiquidityPoolFactoryCrem2sS.approve.call(addresswCff8sY, uintHtl0IhY, {from: accounts[3]});
		const boolMWUAyJ9 = await NasiLiquidityPoolFactoryCrem2sS.decreaseAllowance.call(addressyCZE1c, uintndOSh2T, {from: accounts[3]});
		const uint256KXnsSWu = await NasiLiquidityPoolFactoryCrem2sS.leaveStaking.call(uintKaJ16pM, {from: accounts[3]});
		const boolNKbZk2 = await NasiLiquidityPoolFactoryCrem2sS.mint.call(addressOkOrp3w, uintc5kHnMN, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addresssIqvUQT = accounts[4]
		const addressMGIKR72 = accounts[0]
		const uintVcAL56 = BigInt("907")
		const uintFxt0MD = BigInt("1831")
		const NasiLiquidityPoolFactoryV2FmtZZ = await NasiLiquidityPoolFactory.new(addresssIqvUQT, addressMGIKR72, uintVcAL56, uintFxt0MD, {from: accounts[4]});
		const uintK6SvwI4 = BigInt("1113")
		const addresswZ3ncOK = accounts[4]
		const uintZUXGFeC = BigInt("586")
		const uintBHOlBg4 = BigInt("1617")
		const uintNIIQbwR = BigInt("906")
		const addressdWbRXcm = accounts[1]
		const uintVOJDfOO = BigInt("1859")
		const uintbgIgtix = BigInt("7")
		const uintqH2uJYO = BigInt("1957")
		const addresst7ql2tc = accounts[1]
		const uintToNg7E6 = BigInt("1702")
		const uint256yL3Rcro = await NasiLiquidityPoolFactoryV2FmtZZ.updatePool.call(uintK6SvwI4, {from: accounts[1]});
		const uint256ypDVTqv = await NasiLiquidityPoolFactoryV2FmtZZ.pendingNasi.call(uintZUXGFeC, addresswZ3ncOK, {from: accounts[1]});
		await NasiLiquidityPoolFactoryV2FmtZZ.pause.call({from: accounts[0]});
		const uint256CMVwQQK = await NasiLiquidityPoolFactoryV2FmtZZ.withdraw.call(uintNIIQbwR, uintBHOlBg4, {from: accounts[1]});
		const addressocLLVb = await NasiLiquidityPoolFactoryV2FmtZZ.addMinter.call(addressdWbRXcm, {from: accounts[0]});
		const 
Hj0mmSH = await NasiLiquidityPoolFactoryV2FmtZZ._writeCheckpoint.call(addresst7ql2tc, uintqH2uJYO, uintbgIgtix, uintVOJDfOO, {from: accounts[4]});
		const uint256MgqnYYh = await NasiLiquidityPoolFactoryV2FmtZZ.enterStaking.call(uintToNg7E6, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringqJVpYZm = "1IigvsWN5ir4Bsul7ePFQbhk6DaM1xgdWWsTBhoSv9Nx"
		const stringR4oe6g8 = "nbAXsGBQsNTPoxw5EwngCd6F2k8hKmdLbmjuwbEBxJfm05z72lMaHLNK"
		const uintmPWQSn7 = BigInt("252")
		const NasiLiquidityPoolFactoryFBOlCgG = await NasiLiquidityPoolFactory.new(stringqJVpYZm, stringR4oe6g8, uintmPWQSn7, {from: accounts[1]});
		const addressUxubBeu = accounts[0]
		const uintg138myU = BigInt("807")
		const addressBiEK1Gz = accounts[1]
		const addresswsjHaJB = accounts[1]
		const uint256P8ULCQ5 = await NasiLiquidityPoolFactoryFBOlCgG.totalSupply.call({from: accounts[3]});
		const uint256OGZmEP = await NasiLiquidityPoolFactoryFBOlCgG.totalSupply.call({from: accounts[3]});
		await NasiLiquidityPoolFactoryFBOlCgG.whenPaused.call({from: accounts[4]});
		const addresskUcCV88 = await NasiLiquidityPoolFactoryFBOlCgG.setMigrator.call(addressUxubBeu, {from: accounts[5]});
		const boolp7nVelV = await NasiLiquidityPoolFactoryFBOlCgG.transferFrom.call(addresswsjHaJB, addressBiEK1Gz, uintg138myU, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringBKSPub = "HAK3IIaIBQil3WLxMVRaUAkENrYUn8QjZDxFATj3"
		const stringlsgcd2T = "h9qxrxbDBiyoxr75Dwyd8sKNdJbMA7GlfC6Ze8Q9Vl992EYkhua61NGfFTGNlXczRwtKU5AfQD9b7scduIuO49uuJID9X0"
		const uintfWSVv5x = BigInt("1")
		const NasiLiquidityPoolFactory43w4XN = await NasiLiquidityPoolFactory.new(stringBKSPub, stringlsgcd2T, uintfWSVv5x, {from: accounts[1]});
		const uinta7TXcb = BigInt("1013")
		const uinttMDfud8 = BigInt("2023")
		const uintQcXjU8w = BigInt("189")
		const addresssrbYab9 = accounts[1]
		const uintT4kHpm = BigInt("391")
		const addressZWFJRh3 = accounts[1]
		const uintm8qLxt = BigInt("1454")
		const addressVVOQopw = accounts[0]
		const uint256rDxxKo8 = await NasiLiquidityPoolFactory43w4XN.getBonusMultiplier.call(uinttMDfud8, uinta7TXcb, {from: accounts[4]});
		const boolhyNx1XU = await NasiLiquidityPoolFactory43w4XN.decreaseAllowance.call(addresssrbYab9, uintQcXjU8w, {from: accounts[3]});
		const boolTKsGe4l = await NasiLiquidityPoolFactory43w4XN.increaseAllowance.call(addressZWFJRh3, uintT4kHpm, {from: accounts[5]});
		const addressjL8Iqu = await NasiLiquidityPoolFactory43w4XN.burnFrom.call(addressVVOQopw, uintm8qLxt, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressMwsOxq2 = accounts[1]
		const addressbaLj2CT = accounts[3]
		const uintfGh7HB6 = BigInt("305")
		const uinta1LvR9o = BigInt("919")
		const NasiLiquidityPoolFactoryrM4AuRj = await NasiLiquidityPoolFactory.new(addressMwsOxq2, addressbaLj2CT, uintfGh7HB6, uinta1LvR9o, {from: accounts[0]});
		const uinthJ3u83i = BigInt("907")
		const addresslAjvzFB = accounts[5]
		const addressaZh1kH0 = await NasiLiquidityPoolFactoryrM4AuRj.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolCRwzxG3 = await NasiLiquidityPoolFactoryrM4AuRj.decreaseAllowance.call(addresslAjvzFB, uinthJ3u83i, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringW2YLJkA = "scUdroX4TI4ynjJQRwpPrbBUmb7wPjoxiWkjARrjRgW4lTknvJDOEPG2lO4oVMuSNtHVMUQCYNlku"
		const stringXTAGei = "EjoDQUlc76jda5hZWn89PPBdk5SL9dYpdzBy"
		const uintmpM6MVM = BigInt("168")
		const NasiLiquidityPoolFactoryNRH32mf = await NasiLiquidityPoolFactory.new(stringW2YLJkA, stringXTAGei, uintmpM6MVM, {from: accounts[3]});
		const uintNFFdegT = BigInt("797")
		const addressYc57FBl = accounts[3]
		const uintDUzebTp = BigInt("1360")
		const uintfufYGVn = BigInt("1025")
		const uintjxI3JUw = BigInt("269")
		const addressi9vl5cv = accounts[3]
		const uintUiJjcuv = BigInt("653")
		const address22aFwB = accounts[5]
		const addressRBHgjcH = accounts[1]
		const boolTQ3fgWx = await NasiLiquidityPoolFactoryNRH32mf.transfer.call(addressYc57FBl, uintNFFdegT, {from: accounts[1]});
		await NasiLiquidityPoolFactoryNRH32mf.whenNotPaused.call({from: accounts[3]});
		const uint256MtiXF8L = await NasiLiquidityPoolFactoryNRH32mf.getBonusMultiplier.call(uintfufYGVn, uintDUzebTp, {from: "0x0000000000000000000000000000000000000001"});
		const booloD1l78h = await NasiLiquidityPoolFactoryNRH32mf.decreaseAllowance.call(addressi9vl5cv, uintjxI3JUw, {from: accounts[4]});
		await NasiLiquidityPoolFactoryNRH32mf.whenNotPaused.call({from: accounts[5]});
		const boolh4qrmR9 = await NasiLiquidityPoolFactoryNRH32mf.transferFrom.call(addressRBHgjcH, address22aFwB, uintUiJjcuv, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressBtDqk2f = accounts[4]
		const addressHedvfD1 = accounts[0]
		const uintxYmnGHM = BigInt("907")
		const uintN2WomhA = BigInt("1831")
		const NasiLiquidityPoolFactoryV2FmtZZ = await NasiLiquidityPoolFactory.new(addressBtDqk2f, addressHedvfD1, uintxYmnGHM, uintN2WomhA, {from: accounts[4]});
		const uintxmG6n97 = BigInt("1702")
		const uint256MgqnYYh = await NasiLiquidityPoolFactoryV2FmtZZ.enterStaking.call(uintxmG6n97, {from: accounts[5]});
		const booltWIrMve = await NasiLiquidityPoolFactoryV2FmtZZ.isOwner.call({from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringJsbS63U = "Juc75jzcoZsUaL9UbMHAk1UpMEYvoTHdiFrakufSKtTBk"
		const stringPJjyMne = "zEEIplDGnmfzteZ7jFEu8tCUW1OWeALh6mOozRcIs8Wgmj255BkphV4vTo5YXlmIfCyhaHP9p5MMEjWYti1BdtC6984Y"
		const uintMBARz7k = BigInt("136")
		const NasiLiquidityPoolFactorymeuPDO = await NasiLiquidityPoolFactory.new(stringJsbS63U, stringPJjyMne, uintMBARz7k, {from: accounts[4]});
		const uintsXu0cv = BigInt("1186")
		const uinthpe3ide = BigInt("917")
		const addressh8dqIPZ = "0x0000000000000000000000000000000000000001"
		const addressOvspRME = accounts[4]
		const addressplWaO0i = accounts[0]
		const uint256xK9HDiY = await NasiLiquidityPoolFactorymeuPDO.leaveStaking.call(uintsXu0cv, {from: accounts[5]});
		const address1t41HX = await NasiLiquidityPoolFactorymeuPDO.burnFrom.call(addressh8dqIPZ, uinthpe3ide, {from: accounts[3]});
		const uint256UgMyAyz = await NasiLiquidityPoolFactorymeuPDO.allowance.call(addressplWaO0i, addressOvspRME, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringcumlbF2 = "g9t34FqsWJsyCdX"
		const stringlR7OiwG = "v"
		const uinthSBjCcV = BigInt("112")
		const NasiLiquidityPoolFactoryZF7mM2V = await NasiLiquidityPoolFactory.new(stringcumlbF2, stringlR7OiwG, uinthSBjCcV, {from: accounts[0]});
		const uintBvfCZOa = BigInt("991")
		const addressuYVHK3 = accounts[2]
		const uintgXhnPc = BigInt("471")
		const addressOEj11hj = accounts[4]
		const boolnP9Pfxj = await NasiLiquidityPoolFactoryZF7mM2V.mint.call(addressuYVHK3, uintBvfCZOa, {from: accounts[5]});
		const addressjQAwlXz = await NasiLiquidityPoolFactoryZF7mM2V.burnFrom.call(addressOEj11hj, uintgXhnPc, {from: accounts[2]});
		await NasiLiquidityPoolFactoryZF7mM2V.onlyPauser.call({from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressYPfBHT1 = accounts[4]
		const addressl6e3oEl = accounts[0]
		const uintxlKI2Dz = BigInt("907")
		const uintfIX0yx7 = BigInt("1831")
		const NasiLiquidityPoolFactoryV2FmtZZ = await NasiLiquidityPoolFactory.new(addressYPfBHT1, addressl6e3oEl, uintxlKI2Dz, uintfIX0yx7, {from: accounts[4]});
		const uintRhClJ8b = BigInt("313")
		const uinttSXPuI5 = BigInt("995")
		const uint256Qey6FQg = await NasiLiquidityPoolFactoryV2FmtZZ.getBonusMultiplier.call(uinttSXPuI5, uintRhClJ8b, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringpG4EleQ = ""
		const stringgZ0iYTf = "oOpvW"
		const uintBneZhnn = BigInt("108")
		const NasiLiquidityPoolFactoryR9yrFrd = await NasiLiquidityPoolFactory.new(stringpG4EleQ, stringgZ0iYTf, uintBneZhnn, {from: accounts[2]});
		const uintitKcWxw = BigInt("1629")
		const addresszbL5rvj = accounts[0]
		const uintES6u6ox = BigInt("1867")
		const uintMdIWn7 = BigInt("491")
		const addressVgj6dC = accounts[3]
		const boolGnX0Pwd = await NasiLiquidityPoolFactoryR9yrFrd.transfer.call(addresszbL5rvj, uintitKcWxw, {from: accounts[3]});
		const uint256E69KTqT = await NasiLiquidityPoolFactoryR9yrFrd.updatePool.call(uintES6u6ox, {from: accounts[0]});
		const boolyxi4Z8s = await NasiLiquidityPoolFactoryR9yrFrd.decreaseAllowance.call(addressVgj6dC, uintMdIWn7, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringVrS6vj3 = "NEjBZy4kd48h6eTU1YntOCMjltY57APYDsNWRrwhhcGNX6kTxZElsmUshjAHNsJJuMrMvztZI2DNW6LOaG0"
		const stringmpug7Cf = "BKBnNkiF44hd4FwJwY46Yrxbg72nbX7iplwdtegpP"
		const uintNHfUdC8 = BigInt("6")
		const NasiLiquidityPoolFactoryNwVRtzM = await NasiLiquidityPoolFactory.new(stringVrS6vj3, stringmpug7Cf, uintNHfUdC8, {from: accounts[0]});
		const stringONa7uF = await NasiLiquidityPoolFactoryNwVRtzM.name.call({from: accounts[0]});
		await NasiLiquidityPoolFactoryNwVRtzM.onlyPauser.call({from: accounts[4]});
	});
})