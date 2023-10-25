const XenoFelix = artifacts.require("XenoFelix");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('XenoFelix', (accounts) => {
	it('test for XenoFelix', async () => {
		const stringQF36pZs = "goxrggC4E9C7CBXqHXfQ4KQw2LfeBbeROR1SQ9faBHOpGocI8VeM"
		const stringgfuXsYC = "0jT"
		const uintelUvqoT = BigInt("83")
		const XenoFelixC3USpqV = await XenoFelix.new(stringQF36pZs, stringgfuXsYC, uintelUvqoT, {from: accounts[2]});
		const uintYExLjOp = BigInt("100")
		const uintsBHHfGr = BigInt("1296")
		const addressZ4C0kyM = accounts[1]
		const uintNYE8dtP = BigInt("1228")
		const addressgIWD5sC = accounts[1]
		const addressq6RLyH4 = accounts[4]
		const uintssBSlV8 = BigInt("190")
		const addresszqkaJe = accounts[0]
		const boolccp8A3S = await XenoFelixC3USpqV.lock.call(addressZ4C0kyM, uintsBHHfGr, uintYExLjOp, {from: accounts[1]});
		await XenoFelixC3USpqV.whenNotPaused.call({from: accounts[3]});
		const boolb0QwNSy = await XenoFelixC3USpqV.decreaseAllowance.call(addressgIWD5sC, uintNYE8dtP, {from: accounts[0]});
		const addresss8X2jIP = await XenoFelixC3USpqV.addPauser.call(addressq6RLyH4, {from: accounts[1]});
		const addressi11PDJm = await XenoFelixC3USpqV.burnFrom.call(addresszqkaJe, uintssBSlV8, {from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringo2sn9tR = "ON3ddBP5C8nmu9YdipacRiiUlBWHb7DuTGkwIsi9QUAYwwXgMYDzf4A4C1L8tYQd3jAWYuTvh3cSzrizvdoBxIS8sBw5YH5"
		const stringhO1evGL = "Fd2BqdY8FcFQYOFAIyptQRoMp6VOxCqiwTul7K0JyRdmNhQavKb1DNSjYjTShdAPvkgsNXPsYO6dopowlyR"
		const uintqUq0PJ = BigInt("191")
		const XenoFelixiVyubE5 = await XenoFelix.new(stringo2sn9tR, stringhO1evGL, uintqUq0PJ, {from: accounts[4]});
		const uinttVmtsAZ = BigInt("832")
		const addressAspk9dO = "0x0000000000000000000000000000000000000001"
		const addressoJq1gXI = accounts[5]
		const addressygW3IK = accounts[2]
		const addressf1LGGCq = accounts[3]
		const uintb1s15hQ = BigInt("1335")
		const addressLsXKKTt = accounts[0]
		const addressROjuMc6 = accounts[0]
		const booljKJ6go5 = await XenoFelixiVyubE5.transferFrom.call(addressoJq1gXI, addressAspk9dO, uinttVmtsAZ, {from: accounts[4]});
		const uint256n0vDw5 = await XenoFelixiVyubE5.allowance.call(addressf1LGGCq, addressygW3IK, {from: accounts[0]});
		const boolrDUiALX = await XenoFelixiVyubE5.transferFrom.call(addressROjuMc6, addressLsXKKTt, uintb1s15hQ, {from: accounts[5]});
		const uint256iFgS2bI = await XenoFelixiVyubE5.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for XenoFelix', async () => {
		const XenoFelixN1Tt4BF = await XenoFelix.new({from: accounts[2]});
		const uintsgS6NVV = BigInt("1652")
		const addressldx2eJP = accounts[3]
		const addressPJMIfs = accounts[4]
		const uintUYsv4Q = BigInt("1998")
		const uintv7iPmVo = BigInt("2045")
		const booloG4xZnM = await XenoFelixN1Tt4BF.transferFrom.call(addressPJMIfs, addressldx2eJP, uintsgS6NVV, {from: accounts[5]});
		await XenoFelixN1Tt4BF.pause.call({from: accounts[1]});
		const boolj7EM8X = await XenoFelixN1Tt4BF.paused.call({from: accounts[5]});
		await XenoFelixN1Tt4BF.unpause.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256UTX06TV = await XenoFelixN1Tt4BF.burn.call(uintUYsv4Q, {from: accounts[0]});
		const uint256eESfEt = await XenoFelixN1Tt4BF.burn.call(uintv7iPmVo, {from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringIezAIl = "NORUK53VcEX7jjQcbH1SfNGFN82VHs9wTndJi7JFFrauJCV07eKLOkASKNcMJIvpAKQ2VAAwW891"
		const stringTSgTW7X = "PWCkfgKaH6cL7gOWu4X8qVAwXhpqjA3MVuuE9OprnkQAvKVncpk"
		const uintKCD3LIm = BigInt("866")
		const uintjVCr9bM = BigInt("24")
		const XenoFelixY6mXEqE = await XenoFelix.new(stringIezAIl, stringTSgTW7X, uintKCD3LIm, uintjVCr9bM, {from: accounts[5]});
		const uintetTovd7 = BigInt("1488")
		const addressyEjxFYQ = accounts[0]
//		const boolroMpbmy = await XenoFelixY6mXEqE.unlock.call(addressyEjxFYQ, uintetTovd7, {from: accounts[3]});
//		const boolfWBpI4A = await XenoFelixY6mXEqE.paused.call({from: accounts[3]});
//		const stringtVzTDvv = await XenoFelixY6mXEqE.name.call({from: accounts[1]});

		await expect(XenoFelixY6mXEqE.unlock.call(addressyEjxFYQ, uintetTovd7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringiKlmLlS = "0uo7"
		const stringy4iCI5c = "knKtH9WG1Io3rP2sd7cLU9Gt7c8RHCsBqkUgL8wxWGY8dj"
		const uintk9xDXdk = BigInt("247")
		const XenoFelixIcjENJU = await XenoFelix.new(stringiKlmLlS, stringy4iCI5c, uintk9xDXdk, {from: accounts[3]});
		const addresslZDQeX = accounts[3]
		const uintoC8fT9 = BigInt("481")
		const uintOIAvdmv = BigInt("590")
		const addressLee348F = accounts[3]
		const boolocFDjj6 = await XenoFelixIcjENJU.acceptOwnership.call({from: accounts[3]});
		const boolea3ueR3 = await XenoFelixIcjENJU.unfreezeAccount.call(addresslZDQeX, {from: accounts[3]});
		const boolwmJDa6o = await XenoFelixIcjENJU.transferWithLock.call(addressLee348F, uintOIAvdmv, uintoC8fT9, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for XenoFelix', async () => {
		const stringPJUFZIm = "GMPn5Kz4l6w1Qmc3f2iE2A4o9e7dY0wtZC"
		const stringcguvDbF = "lUeHYddemNs50HFPLoLr48clhya3X34MT2KkbdvaV1wvYNqABgqdJd2nACtduneNgYFQMIkbUCIob3zJ4LVlMOukP1"
		const uintSy2foIt = BigInt("196")
		const XenoFelixLQmLXip = await XenoFelix.new(stringPJUFZIm, stringcguvDbF, uintSy2foIt, {from: accounts[1]});
		const addressDWKBhUQ = accounts[3]
		const addressDFy9Zt1 = accounts[0]
		const addressVkJlJdJ = accounts[3]
		const addressRH832ya = accounts[3]
		const boolI16w3TM = await XenoFelixLQmLXip.isOwner.call(addressDWKBhUQ, {from: accounts[0]});
		const addressHSAwel6 = await XenoFelixLQmLXip.addPauser.call(addressDFy9Zt1, {from: accounts[2]});
		const addressEATsuZ0 = await XenoFelixLQmLXip.notFrozenAndTransaction.call(addressRH832ya, addressVkJlJdJ, {from: accounts[1]});
	});

	it('test for XenoFelix', async () => {
		const stringekpmHJS = "9OEo1e9H"
		const stringBhER2L = "WKP8sEGl4HogHFFzbfNo5aBs3Nh4yUshpGTpkFAR3w9yhZ"
		const uintignqEIP = BigInt("477")
		const uint3quSAx = BigInt("77")
		const XenoFelixT7qyIMM = await XenoFelix.new(stringekpmHJS, stringBhER2L, uintignqEIP, uint3quSAx, {from: accounts[1]});
		const addresscJkUy0R = accounts[4]
		const addressBKncYpR = accounts[2]
		const addressar3IC1c = accounts[5]
		const addressKS2NPGj = accounts[2]
		const uintfoBnKL = BigInt("1613")
		const uint7zfcs3 = BigInt("183")
		const addressv4bmn2 = "0x0000000000000000000000000000000000000001"
		const uintGP5qOVI = BigInt("265")
		const addressDE7ihnG = accounts[0]
		const addressB9l7g8W = accounts[4]
//		const addressJjxRsP = await XenoFelixT7qyIMM.notFrozen.call(addresscJkUy0R, {from: accounts[0]});
//		const boolpzLEbTc = await XenoFelixT7qyIMM.unfreezeAccount.call(addressBKncYpR, {from: accounts[2]});
//		const uint256irNeNkQ = await XenoFelixT7qyIMM.allowance.call(addressKS2NPGj, addressar3IC1c, {from: accounts[4]});
//		const boolOozzwJ3 = await XenoFelixT7qyIMM.lock.call(addressv4bmn2, uint7zfcs3, uintfoBnKL, {from: accounts[1]});
//		const uint256ckvoJtF = await XenoFelixT7qyIMM.burn.call(uintGP5qOVI, {from: accounts[5]});
//		const uint256e3QSLOC = await XenoFelixT7qyIMM.allowance.call(addressB9l7g8W, addressDE7ihnG, {from: accounts[1]});

		await expect(XenoFelixT7qyIMM.notFrozen.call(addresscJkUy0R, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringIezAIl = "NORUK53VcEX7jjQcbH1SfNGFN82VHs9wTndJi7JFFrauJCV07eKLOkASKNcMJIvpAKQ2VAAwW891"
		const stringTSgTW7X = "PWCkfgKaH6cL7gOWu4X8qVAwXhpqjA3MVuuE9OprnkQAvKVncpk"
		const uintF2KJmxq = BigInt("866")
		const uintYV56Soc = BigInt("24")
		const XenoFelixY6mXEqE = await XenoFelix.new(stringIezAIl, stringTSgTW7X, uintF2KJmxq, uintYV56Soc, {from: accounts[5]});
		const uintdN8UGw7 = BigInt("396")
		const addresstvrAuBU = accounts[0]
		const uint256UfUvpFc = await XenoFelixY6mXEqE.totalSupply.call({from: accounts[4]});
//		const boolroMpbmy = await XenoFelixY6mXEqE.unlock.call(addresstvrAuBU, uintdN8UGw7, {from: accounts[3]});

		assert.equal(uint256UfUvpFc, BigInt("866000000000000000000000000"))
		await expect(XenoFelixY6mXEqE.unlock.call(addresstvrAuBU, uintdN8UGw7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringIezAIl = "NORUK53VcEX7jjQcbH1SfNGFN82VHs9wTndJi7JFFrauJCV07eKLOkASKNcMJIvpAKQ2VAAwW891"
		const stringTSgTW7X = "PWCkfgKaH6cL7gOWu4X8qVAwXhpqjA3MVuuE9OprnkQAvKVncpk"
		const uintLjHzerQ = BigInt("866")
		const uintwhLojVb = BigInt("24")
		const XenoFelixY6mXEqE = await XenoFelix.new(stringIezAIl, stringTSgTW7X, uintLjHzerQ, uintwhLojVb, {from: accounts[5]});
		const uintxrXdEoJ = BigInt("1469")
		const addressq9tjJva = accounts[1]
		const addressFfHGA8X = accounts[0]
		const uintfg28CIi = BigInt("26")
		const addressf4KjS5v = accounts[5]
//		const boolFIXtk8M = await XenoFelixY6mXEqE.transferFrom.call(addressFfHGA8X, addressq9tjJva, uintxrXdEoJ, {from: "0x0000000000000000000000000000000000000001"});
//		const addressNzwK7hV = await XenoFelixY6mXEqE.burnFrom.call(addressf4KjS5v, uintfg28CIi, {from: accounts[2]});
//		const stringtVzTDvv = await XenoFelixY6mXEqE.name.call({from: accounts[1]});

		await expect(XenoFelixY6mXEqE.transferFrom.call(addressFfHGA8X, addressq9tjJva, uintxrXdEoJ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringNZYApB = "c5p6fkSBdKK3smaHoW2scQLpP3yYP"
		const stringiQnHGKb = "Jjy9qBGJO2SmqzLWFA3JCEfnL5GUpjjgxssI4kP5udPXlgkQ1VIgsDexAszQyqKmnPYqVy4x"
		const uintqZ025Y = BigInt("1642")
		const uintL0tSolV = BigInt("241")
		const XenoFelixwQxUAZH = await XenoFelix.new(stringNZYApB, stringiQnHGKb, uintqZ025Y, uintL0tSolV, {from: accounts[1]});
		const uintuABYSo1 = BigInt("887")
		const addressAcsBDAO = accounts[4]
		const uintYq7Xuqx = BigInt("1365")
		const uintGwaXXB = BigInt("1659")
		const addresstt4DCKS = accounts[3]
		const addressmXzaEOl = accounts[1]
		const uintGWG0NU = BigInt("957")
		const addressoNnBu7 = accounts[1]
		const addressZpbKboA = "0x0000000000000000000000000000000000000001"
		const uint256OU219Qy = await XenoFelixwQxUAZH.burn.call(uintuABYSo1, {from: accounts[1]});
//		const addressYAP4AeJ = await XenoFelixwQxUAZH.removePauser.call(addressAcsBDAO, {from: accounts[2]});
//		const boollNpYRD = await XenoFelixwQxUAZH.lock.call(addresstt4DCKS, uintGwaXXB, uintYq7Xuqx, {from: accounts[1]});
//		const boolCE2l5u = await XenoFelixwQxUAZH.unfreezeAccount.call(addressmXzaEOl, {from: accounts[3]});
//		const boolh36YAqx = await XenoFelixwQxUAZH.decreaseAllowance.call(addressoNnBu7, uintGWG0NU, {from: accounts[3]});
//		const boolVr3fkYl = await XenoFelixwQxUAZH.unfreezeAccount.call(addressZpbKboA, {from: accounts[3]});

		await expect(XenoFelixwQxUAZH.removePauser.call(addressAcsBDAO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringIezAIl = "NORUK53VcEX7jjQcbH1SfNGFN82VHs9wTndJi7JFFrauJCV07eKLOkASKNcMJIvpAKQ2VAAwW891"
		const stringTSgTW7X = "PWCkfgKaH6cL7gOWu4X8qVAwXhpqjA3MVuuE9OprnkQAvKVncpk"
		const uintKsfHthD = BigInt("866")
		const uintFZBaHw = BigInt("24")
		const XenoFelixY6mXEqE = await XenoFelix.new(stringIezAIl, stringTSgTW7X, uintKsfHthD, uintFZBaHw, {from: accounts[5]});
		const addressuDIhaGc = accounts[5]
		const addressNrakjYu = accounts[1]
		const uintkvAZxi0 = BigInt("396")
		const addressTay5bF8 = accounts[0]
		const uint256JJckpS3 = await XenoFelixY6mXEqE.balanceOf.call(addressuDIhaGc, {from: "0x0000000000000000000000000000000000000001"});
		const uint256YSVkB4W = await XenoFelixY6mXEqE.balanceOf.call(addressNrakjYu, {from: accounts[1]});
//		const boolroMpbmy = await XenoFelixY6mXEqE.unlock.call(addressTay5bF8, uintkvAZxi0, {from: accounts[3]});

		assert.equal(uint256JJckpS3, BigInt("866000000000000000000000000"))
		assert.equal(uint256YSVkB4W, BigInt("0"))
		await expect(XenoFelixY6mXEqE.unlock.call(addressTay5bF8, uintkvAZxi0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringIezAIl = "NORUK53VcEX7jjQcbH1SfNGFN82VHs9wTndJi7JFFrauJCV07eKLOkASKNcMJIvpAKQ2VAAwW891"
		const stringTSgTW7X = "PWCkfgKaH6cL7gOWu4X8qVAwXhpqjA3MVuuE9OprnkQAvKVncpk"
		const uintdDMAJl = BigInt("866")
		const uintudXTCXS = BigInt("24")
		const XenoFelixY6mXEqE = await XenoFelix.new(stringIezAIl, stringTSgTW7X, uintdDMAJl, uintudXTCXS, {from: accounts[5]});
		const uintiPp0j0q = BigInt("1469")
		const addresszUgWYnT = accounts[2]
		const addressKBpaseh = accounts[0]
		const stringI47MUrc = await XenoFelixY6mXEqE.symbol.call({from: accounts[2]});
//		const boolFIXtk8M = await XenoFelixY6mXEqE.transferFrom.call(addressKBpaseh, addresszUgWYnT, uintiPp0j0q, {from: "0x0000000000000000000000000000000000000001"});
//		const stringtVzTDvv = await XenoFelixY6mXEqE.name.call({from: accounts[1]});

		assert.equal(stringI47MUrc, "PWCkfgKaH6cL7gOWu4X8qVAwXhpqjA3MVuuE9OprnkQAvKVncpk")
		await expect(XenoFelixY6mXEqE.transferFrom.call(addressKBpaseh, addresszUgWYnT, uintiPp0j0q, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringIezAIl = "NORUK53VcEX7jjQcbH1SfNGFN82VHs9wTndJi7JFFrauJCV07eKLOkASKNcMJIvpAKQ2VAAwW891"
		const stringTSgTW7X = "PWCkfgKaH6cL7gOWu4X8qVAwXhpqjA3MVuuE9OprnkQAvKVncpk"
		const uintzsNmjKx = BigInt("866")
		const uintO2FWMVl = BigInt("24")
		const XenoFelixY6mXEqE = await XenoFelix.new(stringIezAIl, stringTSgTW7X, uintzsNmjKx, uintO2FWMVl, {from: accounts[5]});
		const address5P6BnP = accounts[6]
		const uintSTdeqCD = BigInt("1653")
		const addressxYAaLBT = accounts[3]
		const addressHC2wyk = accounts[2]
		const uintYNp11h = BigInt("396")
		const addressrUC90G8 = accounts[0]
		const uint256JJckpS3 = await XenoFelixY6mXEqE.balanceOf.call(address5P6BnP, {from: "0x0000000000000000000000000000000000000001"});
//		const boolNEzrL5B = await XenoFelixY6mXEqE.transfer.call(addressxYAaLBT, uintSTdeqCD, {from: accounts[0]});
//		const uint256YSVkB4W = await XenoFelixY6mXEqE.balanceOf.call(addressHC2wyk, {from: accounts[1]});
//		const boolroMpbmy = await XenoFelixY6mXEqE.unlock.call(addressrUC90G8, uintYNp11h, {from: accounts[3]});

		assert.equal(uint256JJckpS3, BigInt("0"))
		await expect(XenoFelixY6mXEqE.transfer.call(addressxYAaLBT, uintSTdeqCD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringIezAIl = "NORUK53VcEX7jjQcbH1SfNGFN82VHs9wTndJi7JFFrauJCV07eKLOkASKNcMJIvpAKQ2VAAwW891"
		const stringTSgTW7X = "PWCkfgKaH6cL7gOWu4X8qVAwXhpqjA3MVuuE9OprnkQAvKVncpk"
		const uinthhFLe1w = BigInt("866")
		const uintPsrDFVH = BigInt("24")
		const XenoFelixY6mXEqE = await XenoFelix.new(stringIezAIl, stringTSgTW7X, uinthhFLe1w, uintPsrDFVH, {from: accounts[5]});
		const uintjvrcYf = BigInt("26")
		const addressSQ1GyK5 = accounts[5]
//		const addressNzwK7hV = await XenoFelixY6mXEqE.burnFrom.call(addressSQ1GyK5, uintjvrcYf, {from: accounts[2]});

		await expect(XenoFelixY6mXEqE.burnFrom.call(addressSQ1GyK5, uintjvrcYf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringGp1GW6 = "5ulPdLWBmsHHODTe5N5AuCFMWdmeQ7skv8MgYdwQbmPpJfZtUFKvHvCOoFD4fWovbfH02W8Ykik2I4KF8g6s8nxc7tl"
		const stringXSxWv7D = "qQdk"
		const uintP5cUH8U = BigInt("170")
		const XenoFelixuXXSruE = await XenoFelix.new(stringGp1GW6, stringXSxWv7D, uintP5cUH8U, {from: "0x0000000000000000000000000000000000000001"});
		const addresssnBVSkQ = accounts[2]
		const addresssf51NXS = accounts[3]
		const boolU0arAIs = await XenoFelixuXXSruE.freezeAccount.call(addresssnBVSkQ, {from: accounts[2]});
		const addressdAD3xW = await XenoFelixuXXSruE.transferOwnership.call(addresssf51NXS, {from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringIezAIl = "NORUK53VcEX7jjQcbH1SfNGFN82VHs9wTndJi7JFFrauJCV07eKLOkASKNcMJIvpAKQ2VAAwW891"
		const stringTSgTW7X = "PWCkfgKaH6cL7gOWu4X8qVAwXhpqjA3MVuuE9OprnkQAvKVncpk"
		const uintXZ0xllE = BigInt("866")
		const uintley9YH5 = BigInt("24")
		const XenoFelixY6mXEqE = await XenoFelix.new(stringIezAIl, stringTSgTW7X, uintXZ0xllE, uintley9YH5, {from: accounts[5]});
		const uintPl2VBQG = BigInt("437")
		const addresszFylNhC = accounts[0]
		const addressnS5XiN = accounts[5]
		const uintPfnvh8 = BigInt("945")
		const addressa7ht2gp = accounts[2]
		const address96T1gA = accounts[1]
		const uintHyyBeed = BigInt("396")
		const addressWh5Rf1V = accounts[1]
//		const boolYRhlH0I = await XenoFelixY6mXEqE.decreaseAllowance.call(addresszFylNhC, uintPl2VBQG, {from: accounts[5]});
//		const uint256JJckpS3 = await XenoFelixY6mXEqE.balanceOf.call(addressnS5XiN, {from: "0x0000000000000000000000000000000000000001"});
//		const boolrwOx5zr = await XenoFelixY6mXEqE.approve.call(addressa7ht2gp, uintPfnvh8, {from: accounts[0]});
//		const uint256YSVkB4W = await XenoFelixY6mXEqE.balanceOf.call(address96T1gA, {from: accounts[1]});
//		const boolroMpbmy = await XenoFelixY6mXEqE.unlock.call(addressWh5Rf1V, uintHyyBeed, {from: accounts[3]});

		await expect(XenoFelixY6mXEqE.decreaseAllowance.call(addresszFylNhC, uintPl2VBQG, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringIezAIl = "NORUK53VcEX7jjQcbH1SfNGFN82VHs9wTndJi7JFFrauJCV07eKLOkASKNcMJIvpAKQ2VAAwW891"
		const stringTSgTW7X = "PWCkfgKaH6cL7gOWu4X8qVAwXhpqjA3MVuuE9OprnkQAvKVncpk"
		const uintZjGdJU0 = BigInt("866")
		const uintQ1a3IVA = BigInt("24")
		const XenoFelixY6mXEqE = await XenoFelix.new(stringIezAIl, stringTSgTW7X, uintZjGdJU0, uintQ1a3IVA, {from: accounts[5]});
		const addressPLlS3Vx = accounts[6]
		const uintmlU7apL = BigInt("427")
		const addressKYhicVj = accounts[0]
		const uint256JJckpS3 = await XenoFelixY6mXEqE.balanceOf.call(addressPLlS3Vx, {from: "0x0000000000000000000000000000000000000001"});
//		await XenoFelixY6mXEqE.renouncePauser.call({from: accounts[0]});
//		const boolroMpbmy = await XenoFelixY6mXEqE.unlock.call(addressKYhicVj, uintmlU7apL, {from: accounts[3]});

		assert.equal(uint256JJckpS3, BigInt("0"))
		await expect(XenoFelixY6mXEqE.renouncePauser.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringIezAIl = "NORUK53VcEX7jjQcbH1SfNGFN82VHs9wTndJi7JFFrauJCV07eKLOkASKNcMJIvpAKQ2VAAwW891"
		const stringTSgTW7X = "PWCkfgKaH6cL7gOWu4X8qVAwXhpqjA3MVuuE9OprnkQAvKVncpk"
		const uintwMzDBK6 = BigInt("866")
		const uintWVpUaEU = BigInt("24")
		const XenoFelixY6mXEqE = await XenoFelix.new(stringIezAIl, stringTSgTW7X, uintwMzDBK6, uintWVpUaEU, {from: accounts[5]});
		const addressvl3ZhRz = accounts[6]
		const uintC9aLCc1 = BigInt("1653")
		const addressTDC2Bit = accounts[4]
		const addressvjlCbET = accounts[2]
		const uintqdCpgeF = BigInt("396")
		const addressEvKC0b = accounts[0]
		const stringVRa37Xd = await XenoFelixY6mXEqE.name.call({from: accounts[2]});
//		await XenoFelixY6mXEqE.onlyOwner.call({from: accounts[4]});
//		const uint256JJckpS3 = await XenoFelixY6mXEqE.balanceOf.call(addressvl3ZhRz, {from: "0x0000000000000000000000000000000000000001"});
//		const boolNEzrL5B = await XenoFelixY6mXEqE.transfer.call(addressTDC2Bit, uintC9aLCc1, {from: accounts[0]});
//		const uint256YSVkB4W = await XenoFelixY6mXEqE.balanceOf.call(addressvjlCbET, {from: accounts[1]});
//		const boolroMpbmy = await XenoFelixY6mXEqE.unlock.call(addressEvKC0b, uintqdCpgeF, {from: accounts[3]});

		assert.equal(stringVRa37Xd, "NORUK53VcEX7jjQcbH1SfNGFN82VHs9wTndJi7JFFrauJCV07eKLOkASKNcMJIvpAKQ2VAAwW891")
		await expect(XenoFelixY6mXEqE.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringIezAIl = "NORUK53VcEX7jjQcbH1SfNGFN82VHs9wTndJi7JFFrauJCV07eKLOkASKNcMJIvpAKQ2VAAwW891"
		const stringTSgTW7X = "PWCkfgKaH6cL7gOWu4X8qVAwXhpqjA3MVuuE9OprnkQAvKVncpk"
		const uintMG5Qrtk = BigInt("866")
		const uintcw4Szqo = BigInt("24")
		const XenoFelixY6mXEqE = await XenoFelix.new(stringIezAIl, stringTSgTW7X, uintMG5Qrtk, uintcw4Szqo, {from: accounts[5]});
		const uintOcZ990a = BigInt("396")
		const addressY6WaBEg = accounts[0]
		const uint8s0yQBdk = await XenoFelixY6mXEqE.decimals.call({from: accounts[0]});
//		const boolroMpbmy = await XenoFelixY6mXEqE.unlock.call(addressY6WaBEg, uintOcZ990a, {from: accounts[3]});

		assert.equal(uint8s0yQBdk, BigInt("24"))
		await expect(XenoFelixY6mXEqE.unlock.call(addressY6WaBEg, uintOcZ990a, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringsgrb909 = "EuopbspsHHoNfYSibCLSQvI4Zxsfnlxkc"
		const stringA8bGv3 = "NrOQ1QmCxlH9M55ANmLNX85R2uiJv4DML18kFhqhAr2yFWZa5s8nFawJ94tOy5Aq2g8vQ4iJc69AbtCpBFwu94a"
		const uinty0jV5bj = BigInt("71")
		const XenoFelixuZZ0zq = await XenoFelix.new(stringsgrb909, stringA8bGv3, uinty0jV5bj, {from: accounts[5]});
		const addressRgUhLpZ = accounts[3]
		const addressPyBrKkv = accounts[3]
		const boolIjPEuM = await XenoFelixuZZ0zq.acceptOwnership.call({from: accounts[2]});
		await XenoFelixuZZ0zq.whenPaused.call({from: accounts[0]});
		const addressqymexe8 = await XenoFelixuZZ0zq.removePauser.call(addressRgUhLpZ, {from: accounts[4]});
		const booljI5Qga = await XenoFelixuZZ0zq.isOwner.call(addressPyBrKkv, {from: accounts[4]});
		const stringdZrrcNg = await XenoFelixuZZ0zq.name.call({from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const string3jHxM9 = "og9K7rSrXM"
		const stringLe5yb9Y = "NlJPUdICYUNz5sStYUEd7JcOSgkHDzK6p2DUHpNbcWgPu54NYddr81BUBE2yXhsbr0d"
		const uintApPvVFZ = BigInt("56")
		const XenoFelixmqEtrJM = await XenoFelix.new(string3jHxM9, stringLe5yb9Y, uintApPvVFZ, {from: accounts[0]});
		const addressuhEaeO4 = accounts[5]
		const uintEvphL7Q = BigInt("1573")
		const stringIGSebjz = await XenoFelixmqEtrJM.symbol.call({from: accounts[1]});
		const strings6ktjPi = await XenoFelixmqEtrJM.name.call({from: accounts[2]});
		await XenoFelixmqEtrJM.whenPaused.call({from: accounts[0]});
		const uint256gkK4cf = await XenoFelixmqEtrJM.balanceOf.call(addressuhEaeO4, {from: accounts[1]});
		const uint256KVJDBD7 = await XenoFelixmqEtrJM.burn.call(uintEvphL7Q, {from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const stringIezAIl = "NORUK53VcEX7jjQcbH1SfNGFN82VHs9wTndJi7JFFrauJCV07eKLOkASKNcMJIvpAKQ2VAAwW891"
		const stringTSgTW7X = "PWCkfgKaH6cL7gOWu4X8qVAwXhpqjA3MVuuE9OprnkQAvKVncpk"
		const uintWccr8jo = BigInt("866")
		const uintb8m6NCB = BigInt("24")
		const XenoFelixY6mXEqE = await XenoFelix.new(stringIezAIl, stringTSgTW7X, uintWccr8jo, uintb8m6NCB, {from: accounts[5]});
		const addressBYLSYR = accounts[5]
		const uintatXOOdc = BigInt("960")
		const addressfn1IX0X = "0x0000000000000000000000000000000000000001"
		const addressBjjaZp0 = "0x0000000000000000000000000000000000000001"
		const addressl1FkQTX = accounts[2]
		const uintqO3xtO9 = BigInt("222")
		const addressRY1ioKk = accounts[0]
		const addressknhhfxm = accounts[4]
		const addressSsOl4u6 = accounts[0]
		const uintc6IMjr6 = BigInt("396")
		const addressDREoJ2n = accounts[0]
		const boolq7YBBYu = await XenoFelixY6mXEqE.paused.call({from: accounts[2]});
		const uint256JJckpS3 = await XenoFelixY6mXEqE.balanceOf.call(addressBYLSYR, {from: "0x0000000000000000000000000000000000000001"});
//		const boolXbVPGha = await XenoFelixY6mXEqE.transferFrom.call(addressBjjaZp0, addressfn1IX0X, uintatXOOdc, {from: accounts[3]});
//		const uint256YSVkB4W = await XenoFelixY6mXEqE.balanceOf.call(addressl1FkQTX, {from: accounts[1]});
//		const boolcBQH15 = await XenoFelixY6mXEqE.transferFrom.call(addressknhhfxm, addressRY1ioKk, uintqO3xtO9, {from: accounts[0]});
//		const addresst73nO7c = await XenoFelixY6mXEqE.transferOwnership.call(addressSsOl4u6, {from: accounts[4]});
//		const uint8vOQIPKN = await XenoFelixY6mXEqE.decimals.call({from: accounts[0]});
//		const boolroMpbmy = await XenoFelixY6mXEqE.unlock.call(addressDREoJ2n, uintc6IMjr6, {from: accounts[3]});

		assert.equal(boolq7YBBYu, false)
		assert.equal(uint256JJckpS3, BigInt("866000000000000000000000000"))
		await expect(XenoFelixY6mXEqE.transferFrom.call(addressBjjaZp0, addressfn1IX0X, uintatXOOdc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringIezAIl = "NORUK53VcEX7jjQcbH1SfNGFN82VHs9wTndJi7JFFrauJCV07eKLOkASKNcMJIvpAKQ2VAAwW891"
		const stringTSgTW7X = "PWCkfgKaH6cL7gOWu4X8qVAwXhpqjA3MVuuE9OprnkQAvKVncpk"
		const uintylb9Jn = BigInt("866")
		const uintAiyT4pA = BigInt("24")
		const XenoFelixY6mXEqE = await XenoFelix.new(stringIezAIl, stringTSgTW7X, uintylb9Jn, uintAiyT4pA, {from: accounts[5]});
		const uintmbMXQn = BigInt("1893")
		const addressSwLMgm6 = accounts[3]
		const addressbOUhW6 = accounts[6]
		const uintNzjAMJl = BigInt("1653")
		const addressX8ia4B = accounts[3]
		const addressxbbzM4 = accounts[3]
		const uintUgiDSWQ = BigInt("396")
		const addressqiFPlIP = accounts[0]
		const boolRgJhy2Y = await XenoFelixY6mXEqE.increaseAllowance.call(addressSwLMgm6, uintmbMXQn, {from: accounts[0]});
//		await XenoFelixY6mXEqE.whenNotPaused.call({from: accounts[3]});
//		const uint256JJckpS3 = await XenoFelixY6mXEqE.balanceOf.call(addressbOUhW6, {from: "0x0000000000000000000000000000000000000001"});
//		const boolNEzrL5B = await XenoFelixY6mXEqE.transfer.call(addressX8ia4B, uintNzjAMJl, {from: accounts[0]});
//		const uint256YSVkB4W = await XenoFelixY6mXEqE.balanceOf.call(addressxbbzM4, {from: accounts[1]});
//		const boolroMpbmy = await XenoFelixY6mXEqE.unlock.call(addressqiFPlIP, uintUgiDSWQ, {from: accounts[3]});

		assert.equal(boolRgJhy2Y, true)
		await expect(XenoFelixY6mXEqE.whenNotPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringIezAIl = "NORUK53VcEX7jjQcbH1SfNGFN82VHs9wTndJi7JFFrauJCV07eKLOkASKNcMJIvpAKQ2VAAwW891"
		const stringTSgTW7X = "PWCkfgKaH6cL7gOWu4X8qVAwXhpqjA3MVuuE9OprnkQAvKVncpk"
		const uintedPxJnY = BigInt("866")
		const uintD2zMYYo = BigInt("24")
		const XenoFelixY6mXEqE = await XenoFelix.new(stringIezAIl, stringTSgTW7X, uintedPxJnY, uintD2zMYYo, {from: accounts[5]});
		const uintDX5z2Tf = BigInt("1822")
		const addressDyMcP9C = accounts[1]
		const uintUwRVFN = BigInt("1138")
		const addressmaCfoQW = accounts[1]
		const addressl6oop76 = accounts[0]
		const addressOwgLL0C = accounts[5]
		const boolW4v5bJx = await XenoFelixY6mXEqE.approve.call(addressDyMcP9C, uintDX5z2Tf, {from: accounts[0]});
//		const boolFIXtk8M = await XenoFelixY6mXEqE.transferFrom.call(addressl6oop76, addressmaCfoQW, uintUwRVFN, {from: "0x0000000000000000000000000000000000000001"});
//		const boolfU4qvId = await XenoFelixY6mXEqE.isPauser.call(addressOwgLL0C, {from: accounts[2]});

		assert.equal(boolW4v5bJx, true)
		await expect(XenoFelixY6mXEqE.transferFrom.call(addressl6oop76, addressmaCfoQW, uintUwRVFN, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringIezAIl = "NORUK53VcEX7jjQcbH1SfNGFN82VHs9wTndJi7JFFrauJCV07eKLOkASKNcMJIvpAKQ2VAAwW891"
		const stringTSgTW7X = "PWCkfgKaH6cL7gOWu4X8qVAwXhpqjA3MVuuE9OprnkQAvKVncpk"
		const uintiXwPezR = BigInt("866")
		const uintgwh5VPY = BigInt("24")
		const XenoFelixY6mXEqE = await XenoFelix.new(stringIezAIl, stringTSgTW7X, uintiXwPezR, uintgwh5VPY, {from: accounts[5]});
		const addressEx8YyxF = accounts[1]
		const uintsEa57kk = BigInt("1653")
		const addressfPcCEA = accounts[3]
		const uintWYDuvB = BigInt("373")
		const addressjSH8Klc = accounts[0]
//		const booldIz4OpK = await XenoFelixY6mXEqE.unfreezeAccount.call(addressEx8YyxF, {from: accounts[5]});
//		const boolSdQiWcI = await XenoFelixY6mXEqE.acceptOwnership.call({from: accounts[0]});
//		const boolNEzrL5B = await XenoFelixY6mXEqE.transfer.call(addressfPcCEA, uintsEa57kk, {from: accounts[0]});
//		const boolroMpbmy = await XenoFelixY6mXEqE.unlock.call(addressjSH8Klc, uintWYDuvB, {from: accounts[3]});

		await expect(XenoFelixY6mXEqE.unfreezeAccount.call(addressEx8YyxF, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringIezAIl = "NORUK53VcEX7jjQcbH1SfNGFN82VHs9wTndJi7JFFrauJCV07eKLOkASKNcMJIvpAKQ2VAAwW891"
		const stringTSgTW7X = "PWCkfgKaH6cL7gOWu4X8qVAwXhpqjA3MVuuE9OprnkQAvKVncpk"
		const uintRn8nPtS = BigInt("866")
		const uintku77zxY = BigInt("24")
		const XenoFelixY6mXEqE = await XenoFelix.new(stringIezAIl, stringTSgTW7X, uintRn8nPtS, uintku77zxY, {from: accounts[5]});
		const address1VDhnt = accounts[2]
		const addressTBz4zq = accounts[1]
		const uintj6jYQC3 = BigInt("1469")
		const addressbcU7mbO = accounts[1]
		const addressxBXAfsT = accounts[0]
		const uint256VaN6npH = await XenoFelixY6mXEqE.allowance.call(addressTBz4zq, address1VDhnt, {from: "0x0000000000000000000000000000000000000001"});
//		const boolFIXtk8M = await XenoFelixY6mXEqE.transferFrom.call(addressxBXAfsT, addressbcU7mbO, uintj6jYQC3, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256VaN6npH, BigInt("0"))
		await expect(XenoFelixY6mXEqE.transferFrom.call(addressxBXAfsT, addressbcU7mbO, uintj6jYQC3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringsy4IJB = "EWKnHJx5iPPENL9QlRKAb3X36e"
		const stringvseeJ2p = "it"
		const uintlv7Ocfs = BigInt("1396")
		const uintBf7M1Em = BigInt("99")
		const XenoFelixDnf03Ib = await XenoFelix.new(stringsy4IJB, stringvseeJ2p, uintlv7Ocfs, uintBf7M1Em, {from: "0x0000000000000000000000000000000000000001"});
		const uintgCjFOvH = BigInt("1099")
		const addressP4RLCkk = accounts[2]
		const uintqW1YmOp = BigInt("1028")
		const addressQPwtQ8 = accounts[2]
		const addressAwbRDw0 = accounts[1]
		const addressIZAKJ2z = accounts[3]
		const boolwz7NbqX = await XenoFelixDnf03Ib.approve.call(addressP4RLCkk, uintgCjFOvH, {from: accounts[5]});
		await XenoFelixDnf03Ib.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolxRikRei = await XenoFelixDnf03Ib.transferFrom.call(addressAwbRDw0, addressQPwtQ8, uintqW1YmOp, {from: accounts[5]});
		await XenoFelixDnf03Ib.whenNotPaused.call({from: accounts[3]});
		const boolHOs9pxb = await XenoFelixDnf03Ib.isPauser.call(addressIZAKJ2z, {from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringIezAIl = "NORUK53VcEX7jjQcbH1SfNGFN82VHs9wTndJi7JFFrauJCV07eKLOkASKNcMJIvpAKQ2VAAwW891"
		const stringTSgTW7X = "PWCkfgKaH6cL7gOWu4X8qVAwXhpqjA3MVuuE9OprnkQAvKVncpk"
		const uintqNDcz6 = BigInt("866")
		const uintU9Cfmi3 = BigInt("24")
		const XenoFelixY6mXEqE = await XenoFelix.new(stringIezAIl, stringTSgTW7X, uintqNDcz6, uintU9Cfmi3, {from: accounts[5]});
		const uintPwGPlQ5 = BigInt("1016")
		const uintMdgtpsZ = BigInt("1723")
		const addressS8UJQV = accounts[4]
		const uintUMK2VOC = BigInt("1110")
		const addressH1YiKQF = accounts[4]
		const boolAAfBNz5 = await XenoFelixY6mXEqE.transferWithLock.call(addressS8UJQV, uintMdgtpsZ, uintPwGPlQ5, {from: accounts[5]});
		const boolpBgUnLp = await XenoFelixY6mXEqE.increaseAllowance.call(addressH1YiKQF, uintUMK2VOC, {from: accounts[4]});
//		await XenoFelixY6mXEqE.renouncePauser.call({from: accounts[0]});

		assert.equal(boolAAfBNz5, true)
		assert.equal(boolpBgUnLp, true)
		await expect(XenoFelixY6mXEqE.renouncePauser.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})