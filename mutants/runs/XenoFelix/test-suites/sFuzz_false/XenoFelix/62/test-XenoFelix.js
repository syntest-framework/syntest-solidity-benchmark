const XenoFelix = artifacts.require("XenoFelix");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('XenoFelix', (accounts) => {
	it('test for XenoFelix', async () => {
		const stringwoksaaQ = "U2yd6QFUxiAeGb9ntwnWJIQKGnPNNx4AK2FVIqggkmg7vZy28Mx23e6EzXwkAyPQmDdLyvXYx"
		const stringsAusZr3 = "dCSUJQww1"
		const uintsgLorGw = BigInt("203")
		const XenoFelixAdHneL6 = await XenoFelix.new(stringwoksaaQ, stringsAusZr3, uintsgLorGw, {from: accounts[4]});
		const uint4xBm41 = BigInt("592")
		const addressXMs9Lkm = accounts[2]
		const uintF7p32wm = BigInt("848")
		const addressDpdzQtS = accounts[4]
		const addressdokWdgd = accounts[3]
		const addressB4bjIPc = await XenoFelixAdHneL6.burnFrom.call(addressXMs9Lkm, uint4xBm41, {from: accounts[2]});
		const boolHJmFJGD = await XenoFelixAdHneL6.increaseAllowance.call(addressDpdzQtS, uintF7p32wm, {from: accounts[1]});
		const boolyfWE15X = await XenoFelixAdHneL6.paused.call({from: accounts[3]});
		const addressutR4g7C = await XenoFelixAdHneL6.addPauser.call(addressdokWdgd, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for XenoFelix', async () => {
		const XenoFelixu7tRuro = await XenoFelix.new({from: accounts[3]});
		const address7vOnlm = accounts[1]
		const addressqJp8bQZ = accounts[0]
		const addressmdubNsL = accounts[1]
		await XenoFelixu7tRuro.whenNotPaused.call({from: accounts[0]});
		const boolD59qmWe = await XenoFelixu7tRuro.isPauser.call(address7vOnlm, {from: accounts[3]});
		await XenoFelixu7tRuro.onlyPauser.call({from: accounts[5]});
		const uint256bgK0FDR = await XenoFelixu7tRuro.allowance.call(addressmdubNsL, addressqJp8bQZ, {from: accounts[4]});
		await XenoFelixu7tRuro.onlyNewOwner.call({from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringMpbjICR = "yyFcdAug8Z5pzIw1FOfzVaCD4lcR9jJLHfTawOxcAqiEEmlM7O98u6FNDU2XsFPYLDzX"
		const stringljjJ59A = "VuwVmE1xcAth2FJU1RjFT3oNcQOq6P7A3Lpfv0kEr1ZW0sWeBQj"
		const uintU74O22 = BigInt("90")
		const XenoFelixQurDHMp = await XenoFelix.new(stringMpbjICR, stringljjJ59A, uintU74O22, {from: accounts[1]});
		const addresshhgOg2 = accounts[0]
		const addressPoLIsK4 = accounts[3]
		const addresshAsSwsw = accounts[1]
		await XenoFelixQurDHMp.whenNotPaused.call({from: accounts[3]});
		const boolkQcJ95k = await XenoFelixQurDHMp.freezeAccount.call(addresshhgOg2, {from: accounts[2]});
		const uint256uz4x4N = await XenoFelixQurDHMp.allowance.call(addresshAsSwsw, addressPoLIsK4, {from: accounts[3]});
		const stringEAtu45w = await XenoFelixQurDHMp.symbol.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for XenoFelix', async () => {
		const stringSltRL58 = "sShnSEasNffdvPMEP3BlGlo5nMftY3yssHKbQjEmTMQJAwvFpr4rq46qF0xd7n4c5FnDcLPLS"
		const stringVXhT8bl = "KWpIMBvVfd0Y31yLriVElTTzGoCUMBewhuabcMuQsMMvGHXyZVZOIok"
		const uintUI0EJUt = BigInt("204")
		const XenoFelixXI1tRch = await XenoFelix.new(stringSltRL58, stringVXhT8bl, uintUI0EJUt, {from: accounts[0]});
		const uintuQMHYGw = BigInt("364")
		const addressQ8yH9PC = accounts[2]
		const uintVjt2lbf = BigInt("281")
		const addressALAR5UX = accounts[0]
		const booljdNHs6q = await XenoFelixXI1tRch.transfer.call(addressQ8yH9PC, uintuQMHYGw, {from: accounts[0]});
		const uint256SbHuVEL = await XenoFelixXI1tRch.totalSupply.call({from: accounts[1]});
		const uint8tV7SZt = await XenoFelixXI1tRch.decimals.call({from: accounts[1]});
		await XenoFelixXI1tRch.unpause.call({from: accounts[4]});
		const boolbGd8QB = await XenoFelixXI1tRch.decreaseAllowance.call(addressALAR5UX, uintVjt2lbf, {from: accounts[1]});
		await XenoFelixXI1tRch.pause.call({from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringo9r9pQQ = "OFcAhgseMkREzGMoo1npXcHlClT594vcBvENuEXhX8PdbIwIwyN"
		const stringPhRU0m = "bwrYx2B1tnKX3pqbnn6rcXfKJO3I3RfyVuj07zuoOI"
		const uintqrSQQhf = BigInt("15")
		const XenoFelixtMKLJ74 = await XenoFelix.new(stringo9r9pQQ, stringPhRU0m, uintqrSQQhf, {from: accounts[5]});
		const uint1OyoqG = BigInt("2025")
		const addressRjykjl2 = accounts[5]
		const uintbPn537 = BigInt("73")
		const addressPcYicGi = accounts[3]
		const addressj2cHBsZ = accounts[4]
		const booldMBjkE = await XenoFelixtMKLJ74.paused.call({from: accounts[1]});
		const boolq5DSnQt = await XenoFelixtMKLJ74.transfer.call(addressRjykjl2, uint1OyoqG, {from: accounts[0]});
		const boolvdJeIYo = await XenoFelixtMKLJ74.unlock.call(addressPcYicGi, uintbPn537, {from: accounts[4]});
		const boolVSuq43Z = await XenoFelixtMKLJ74.isPauser.call(addressj2cHBsZ, {from: accounts[4]});
		await XenoFelixtMKLJ74.unpause.call({from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringuYRUKz = "6FKLAK2YbENyor8bujR6q8UulNYDxHMuRk8ubtdnYuEWcUUoBj3Rr6RpGf75v4PKrml8t1BjWk4czNuzN"
		const stringot55bZk = "H2RBC9gSDM32uTTWj1htrkNfw8EpjwR9LLBliyEoIEygEF5ReCwo3ecE3nyH4i13ykgQyfmb1ss89"
		const uintsrI85xB = BigInt("212")
		const XenoFelixT3Bq1RM = await XenoFelix.new(stringuYRUKz, stringot55bZk, uintsrI85xB, {from: "0x0000000000000000000000000000000000000001"});
		const addressFowJF1v = accounts[3]
		const addressH8vcmMR = accounts[5]
		const addresssIbG2Mz = accounts[2]
		const addressVoRbUgP = accounts[1]
		const addressuqd69aN = await XenoFelixT3Bq1RM.addPauser.call(addressFowJF1v, {from: accounts[3]});
		const addressdqw985Y = await XenoFelixT3Bq1RM.notFrozenAndTransaction.call(addresssIbG2Mz, addressH8vcmMR, {from: accounts[4]});
		await XenoFelixT3Bq1RM.unpause.call({from: accounts[1]});
		const boolzNlNZ0n = await XenoFelixT3Bq1RM.unfreezeAccount.call(addressVoRbUgP, {from: accounts[4]});
		await XenoFelixT3Bq1RM.whenNotPaused.call({from: accounts[1]});
	});

	it('test for XenoFelix', async () => {
		const stringIqvhm7a = "RAN"
		const stringWQXxrHJ = "ejd9GN5HgGlSqMYvmfR2Z9uc8HHbAH5nmMBMqFYGF6x9BebUjUyLaKmiTW0vHd1SbulrOdyqT8iNKeU8Oi"
		const uintO6vfyy9 = BigInt("1262")
		const uintB3bJnZO = BigInt("223")
		const XenoFelixrpbm3Uy = await XenoFelix.new(stringIqvhm7a, stringWQXxrHJ, uintO6vfyy9, uintB3bJnZO, {from: accounts[2]});
		const uintwUGpu8N = BigInt("1783")
		const addressGhJnyOB = "0x0000000000000000000000000000000000000001"
		const addressjBttSps = accounts[0]
		const uintJ8Uq1OI = BigInt("0")
		const addressGKgzzsq = accounts[0]
		const boolV93cA7h = await XenoFelixrpbm3Uy.acceptOwnership.call({from: accounts[5]});
		const boolBRkSvyi = await XenoFelixrpbm3Uy.acceptOwnership.call({from: accounts[4]});
		const boolClnqoP0 = await XenoFelixrpbm3Uy.transferFrom.call(addressjBttSps, addressGhJnyOB, uintwUGpu8N, {from: accounts[5]});
		const boolUx0IHu = await XenoFelixrpbm3Uy.burnOwner.call(addressGKgzzsq, uintJ8Uq1OI, {from: accounts[5]});

		await expect(XenoFelixrpbm3Uy.acceptOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringVX5qzLm = "lXpRZYp7Li5yRUpuPq"
		const stringSPtBSx7 = "cbOqlj4nFcy9u8a5TKrtEKb9hdE4JhwngBikgwcgLvRs2F6LvWWDGdTDfGfy4x5sysSTuRPs4LDW2oEHe3FZmoPVIwpf"
		const uintecj0OGw = BigInt("119")
		const XenoFelixK4lkC3M = await XenoFelix.new(stringVX5qzLm, stringSPtBSx7, uintecj0OGw, {from: accounts[3]});
		const uintZjYcnQm = BigInt("1735")
		const addressVedxtMe = accounts[0]
		const addresss574FVC = accounts[2]
		const addressGFeDT9M = accounts[2]
		const boolrxYwGkd = await XenoFelixK4lkC3M.transferFrom.call(addresss574FVC, addressVedxtMe, uintZjYcnQm, {from: accounts[4]});
		const boolPgZNHtS = await XenoFelixK4lkC3M.unfreezeAccount.call(addressGFeDT9M, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for XenoFelix', async () => {
		const stringpSWfDaC = "cxGoQnUEDvWW6XOaQtYelUCYbwgwByM6iObbE1ZPjQ6npOkDnHUCHJVJI9f"
		const stringMuFpv4w = "HdiLF"
		const uint9oJcQi = BigInt("1811")
		const uintyCvgL1C = BigInt("196")
		const XenoFelixiFcKtp = await XenoFelix.new(stringpSWfDaC, stringMuFpv4w, uint9oJcQi, uintyCvgL1C, {from: accounts[1]});
		const uintNXnBGzG = BigInt("302")
		const addressBMtroNi = accounts[2]
		const addressPt5pFkj = accounts[4]
		const addresscrnsnLk = accounts[5]
		const stringBBUmY9 = await XenoFelixiFcKtp.name.call({from: accounts[3]});
		const boolW7yceUm = await XenoFelixiFcKtp.transferFrom.call(addressPt5pFkj, addressBMtroNi, uintNXnBGzG, {from: "0x0000000000000000000000000000000000000001"});
		const uint256kKFRz5a = await XenoFelixiFcKtp.balanceOf.call(addresscrnsnLk, {from: accounts[2]});

		assert.equal(stringBBUmY9, "cxGoQnUEDvWW6XOaQtYelUCYbwgwByM6iObbE1ZPjQ6npOkDnHUCHJVJI9f")
		await expect(XenoFelixiFcKtp.transferFrom.call(addressPt5pFkj, addressBMtroNi, uintNXnBGzG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringpSWfDaC = "cxGoQnUEDvWW6XOaQtYelUCYbwgwByM6iObbE1ZPjQ6npOkDnHUCHJVJI9f"
		const stringMuFpv4w = "HdiLF"
		const uintI3VZlB = BigInt("1811")
		const uintRwbhk8c = BigInt("196")
		const XenoFelixiFcKtp = await XenoFelix.new(stringpSWfDaC, stringMuFpv4w, uintI3VZlB, uintRwbhk8c, {from: accounts[1]});
		const uintYGIE5ZJ = BigInt("302")
		const addressU6QVSDE = accounts[3]
		const addressbnH3tjx = accounts[4]
		const addressrb3Dokg = accounts[5]
		await XenoFelixiFcKtp.onlyPauser.call({from: accounts[5]});
		const stringBBUmY9 = await XenoFelixiFcKtp.name.call({from: accounts[3]});
		const boolAxJn2mA = await XenoFelixiFcKtp.paused.call({from: accounts[4]});
		const boolW7yceUm = await XenoFelixiFcKtp.transferFrom.call(addressbnH3tjx, addressU6QVSDE, uintYGIE5ZJ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256kKFRz5a = await XenoFelixiFcKtp.balanceOf.call(addressrb3Dokg, {from: accounts[2]});

		await expect(XenoFelixiFcKtp.onlyPauser.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringpSWfDaC = "cxGoQnUEDvWW6XOaQtYelUCYbwgwByM6iObbE1ZPjQ6npOkDnHUCHJVJI9f"
		const stringMuFpv4w = "HdiLF"
		const uinttoMkNE4 = BigInt("1811")
		const uintCY0LNfh = BigInt("196")
		const XenoFelixiFcKtp = await XenoFelix.new(stringpSWfDaC, stringMuFpv4w, uinttoMkNE4, uintCY0LNfh, {from: accounts[1]});
		const addresswFv3Kgd = accounts[5]
		const stringBBUmY9 = await XenoFelixiFcKtp.name.call({from: accounts[3]});
		const uint256kKFRz5a = await XenoFelixiFcKtp.balanceOf.call(addresswFv3Kgd, {from: accounts[2]});

		assert.equal(stringBBUmY9, "cxGoQnUEDvWW6XOaQtYelUCYbwgwByM6iObbE1ZPjQ6npOkDnHUCHJVJI9f")
		assert.equal(uint256kKFRz5a, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringpSWfDaC = "cxGoQnUEDvWW6XOaQtYelUCYbwgwByM6iObbE1ZPjQ6npOkDnHUCHJVJI9f"
		const stringMuFpv4w = "HdiLF"
		const uintVTxMSsf = BigInt("1811")
		const uintOgZc8Ss = BigInt("196")
		const XenoFelixiFcKtp = await XenoFelix.new(stringpSWfDaC, stringMuFpv4w, uintVTxMSsf, uintOgZc8Ss, {from: accounts[1]});
		const uintP6jEqn8 = BigInt("302")
		const addressl0PESh = accounts[3]
		const addressKqFPope = accounts[4]
		const addressgaxdPBL = accounts[0]
		const addressGCSO24x = accounts[5]
		const stringBBUmY9 = await XenoFelixiFcKtp.name.call({from: accounts[3]});
		await XenoFelixiFcKtp.unpause.call({from: accounts[3]});
		const boolW7yceUm = await XenoFelixiFcKtp.transferFrom.call(addressKqFPope, addressl0PESh, uintP6jEqn8, {from: "0x0000000000000000000000000000000000000001"});
		const boolUfTSfME = await XenoFelixiFcKtp.acceptOwnership.call({from: accounts[3]});
		const uint256FYgkcoG = await XenoFelixiFcKtp.balanceOf.call(addressgaxdPBL, {from: accounts[2]});
		const uint256kKFRz5a = await XenoFelixiFcKtp.balanceOf.call(addressGCSO24x, {from: accounts[2]});

		assert.equal(stringBBUmY9, "cxGoQnUEDvWW6XOaQtYelUCYbwgwByM6iObbE1ZPjQ6npOkDnHUCHJVJI9f")
		await expect(XenoFelixiFcKtp.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringpSWfDaC = "cxGoQnUEDvWW6XOaQtYelUCYbwgwByM6iObbE1ZPjQ6npOkDnHUCHJVJI9f"
		const stringMuFpv4w = "HdiLF"
		const uintCBBZlQj = BigInt("1811")
		const uintjS53Y6y = BigInt("196")
		const XenoFelixiFcKtp = await XenoFelix.new(stringpSWfDaC, stringMuFpv4w, uintCBBZlQj, uintjS53Y6y, {from: accounts[1]});
		const addressLsTSIp6 = accounts[7]
		const addressfmLccvu = accounts[4]
		const addressildFNjD = accounts[1]
		const uint256kKFRz5a = await XenoFelixiFcKtp.balanceOf.call(addressLsTSIp6, {from: accounts[2]});
		const boolL7Qq3XM = await XenoFelixiFcKtp.isOwner.call(addressfmLccvu, {from: accounts[0]});
		const boolBzyjRJi = await XenoFelixiFcKtp.isOwner.call(addressildFNjD, {from: accounts[3]});

		assert.equal(boolBzyjRJi, true)
		assert.equal(boolL7Qq3XM, false)
		assert.equal(uint256kKFRz5a, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringpSWfDaC = "cxGoQnUEDvWW6XOaQtYelUCYbwgwByM6iObbE1ZPjQ6npOkDnHUCHJVJI9f"
		const stringMuFpv4w = "HdiLF"
		const uintt9Q48q5 = BigInt("1811")
		const uintpxsrJmE = BigInt("196")
		const XenoFelixiFcKtp = await XenoFelix.new(stringpSWfDaC, stringMuFpv4w, uintt9Q48q5, uintpxsrJmE, {from: accounts[1]});
		const addressgTk8XWr = accounts[6]
		const uint256kKFRz5a = await XenoFelixiFcKtp.balanceOf.call(addressgTk8XWr, {from: accounts[2]});
		const stringKPDtH13 = await XenoFelixiFcKtp.symbol.call({from: accounts[5]});

		assert.equal(stringKPDtH13, "HdiLF")
		assert.equal(uint256kKFRz5a, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringpSWfDaC = "cxGoQnUEDvWW6XOaQtYelUCYbwgwByM6iObbE1ZPjQ6npOkDnHUCHJVJI9f"
		const stringMuFpv4w = "HdiLF"
		const uintn8Yv9Ce = BigInt("1811")
		const uinth9N6uNY = BigInt("196")
		const XenoFelixiFcKtp = await XenoFelix.new(stringpSWfDaC, stringMuFpv4w, uintn8Yv9Ce, uinth9N6uNY, {from: accounts[1]});
		const uintjfYHSNA = BigInt("286")
		const addresscc6Ka0r = accounts[3]
		const addressW4G7yM2 = accounts[4]
		const uint8zIRwk5 = await XenoFelixiFcKtp.decimals.call({from: accounts[4]});
		const boolW7yceUm = await XenoFelixiFcKtp.transferFrom.call(addressW4G7yM2, addresscc6Ka0r, uintjfYHSNA, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint8zIRwk5, BigInt("196"))
		await expect(XenoFelixiFcKtp.transferFrom.call(addressW4G7yM2, addresscc6Ka0r, uintjfYHSNA, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringpSWfDaC = "cxGoQnUEDvWW6XOaQtYelUCYbwgwByM6iObbE1ZPjQ6npOkDnHUCHJVJI9f"
		const stringMuFpv4w = "HdiLF"
		const uintjuBwxMy = BigInt("1811")
		const uintBYUElkP = BigInt("196")
		const XenoFelixiFcKtp = await XenoFelix.new(stringpSWfDaC, stringMuFpv4w, uintjuBwxMy, uintBYUElkP, {from: accounts[1]});
		const uintAhDWj9r = BigInt("286")
		const addressZf2cFgF = accounts[3]
		const addressstihD7H = accounts[4]
		const uintP98mFHM = BigInt("1928")
		const addresswHe7wK4 = accounts[3]
		const boolH3M25Qv = await XenoFelixiFcKtp.paused.call({from: accounts[3]});
		const boolW7yceUm = await XenoFelixiFcKtp.transferFrom.call(addressstihD7H, addressZf2cFgF, uintAhDWj9r, {from: "0x0000000000000000000000000000000000000001"});
		const boolrQ0aAJJ = await XenoFelixiFcKtp.burnOwner.call(addresswHe7wK4, uintP98mFHM, {from: accounts[4]});

		assert.equal(boolH3M25Qv, false)
		await expect(XenoFelixiFcKtp.transferFrom.call(addressstihD7H, addressZf2cFgF, uintAhDWj9r, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringpSWfDaC = "cxGoQnUEDvWW6XOaQtYelUCYbwgwByM6iObbE1ZPjQ6npOkDnHUCHJVJI9f"
		const stringMuFpv4w = "HdiLF"
		const uintKcYAq7w = BigInt("1811")
		const uintcfLVHLH = BigInt("196")
		const XenoFelixiFcKtp = await XenoFelix.new(stringpSWfDaC, stringMuFpv4w, uintKcYAq7w, uintcfLVHLH, {from: accounts[1]});
		const uintQ9hqZIW = BigInt("1508")
		const addresskxMKBtU = accounts[5]
		const uintk9pyM3o = BigInt("286")
		const addressqGnZUB7 = accounts[2]
		const addressEzkDC7H = accounts[4]
		const boolfejwDZR = await XenoFelixiFcKtp.decreaseAllowance.call(addresskxMKBtU, uintQ9hqZIW, {from: accounts[2]});
		const boolW7yceUm = await XenoFelixiFcKtp.transferFrom.call(addressEzkDC7H, addressqGnZUB7, uintk9pyM3o, {from: "0x0000000000000000000000000000000000000001"});

		await expect(XenoFelixiFcKtp.decreaseAllowance.call(addresskxMKBtU, uintQ9hqZIW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringpSWfDaC = "cxGoQnUEDvWW6XOaQtYelUCYbwgwByM6iObbE1ZPjQ6npOkDnHUCHJVJI9f"
		const stringMuFpv4w = "HdiLF"
		const uintcvHgfwa = BigInt("1811")
		const uintTMcmW70 = BigInt("196")
		const XenoFelixiFcKtp = await XenoFelix.new(stringpSWfDaC, stringMuFpv4w, uintcvHgfwa, uintTMcmW70, {from: accounts[1]});
		const uintEqWVKfJ = BigInt("2001")
		const address0SxTYI = accounts[4]
		const uintHxNfKn = BigInt("1922")
		const addressjbcxWAt = accounts[4]
		const addressE1TqL2K = accounts[3]
		const addressz981E3 = accounts[7]
		const bool20WDZD = await XenoFelixiFcKtp.transfer.call(address0SxTYI, uintEqWVKfJ, {from: accounts[2]});
		const boolu2Pf1dx = await XenoFelixiFcKtp.transferFrom.call(addressE1TqL2K, addressjbcxWAt, uintHxNfKn, {from: accounts[2]});
		const uint256kKFRz5a = await XenoFelixiFcKtp.balanceOf.call(addressz981E3, {from: accounts[2]});

		await expect(XenoFelixiFcKtp.transfer.call(address0SxTYI, uintEqWVKfJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const string3vY615 = "c31mE66NUNATRgnIcpwybZX42OpRoNMxVJQSJndx5kudNzJfnymmyf8zy1Gl3X"
		const stringVAb1ik = "UEyNi2kvudNhqWtunYCoSKa2o9yug0fEMKC8SgQuyUMKehb2y2BOT6Dt3orfxyq0V"
		const uinteqjM6IH = BigInt("421")
		const uintRRJFSR2 = BigInt("176")
		const XenoFelix5tut2I = await XenoFelix.new(string3vY615, stringVAb1ik, uinteqjM6IH, uintRRJFSR2, {from: accounts[2]});
		const addressXcgr2BF = accounts[0]
		const uintS2ipclp = BigInt("75")
		const addressbuz1AS4 = accounts[4]
		const uintRGr3V6p = BigInt("1607")
		const addressoX0kzsU = accounts[4]
		const addressRKj1h5 = accounts[1]
		const uintyE9fAPK = BigInt("1038")
		const address7GVWGO = accounts[0]
		const addressSufE7SJ = accounts[4]
		const boolUQh5S06 = await XenoFelix5tut2I.isOwner.call(addressXcgr2BF, {from: accounts[3]});
		const addressnTTcrN = await XenoFelix5tut2I.burnFrom.call(addressbuz1AS4, uintS2ipclp, {from: "0x0000000000000000000000000000000000000001"});
		const boolzBu9k8e = await XenoFelix5tut2I.transferFrom.call(addressRKj1h5, addressoX0kzsU, uintRGr3V6p, {from: "0x0000000000000000000000000000000000000001"});
		const boolKvX4E2B = await XenoFelix5tut2I.transferFrom.call(addressSufE7SJ, address7GVWGO, uintyE9fAPK, {from: accounts[3]});

		assert.equal(boolUQh5S06, false)
		await expect(XenoFelix5tut2I.burnFrom.call(addressbuz1AS4, uintS2ipclp, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringpSWfDaC = "cxGoQnUEDvWW6XOaQtYelUCYbwgwByM6iObbE1ZPjQ6npOkDnHUCHJVJI9f"
		const stringMuFpv4w = "HdiLF"
		const uintQRjTmtk = BigInt("1811")
		const uintL62mkQy = BigInt("196")
		const XenoFelixiFcKtp = await XenoFelix.new(stringpSWfDaC, stringMuFpv4w, uintQRjTmtk, uintL62mkQy, {from: accounts[1]});
		const addressdKjdfGm = accounts[7]
		const addressMddzMo = accounts[1]
		const uint256kKFRz5a = await XenoFelixiFcKtp.balanceOf.call(addressdKjdfGm, {from: accounts[2]});
		const addressuFig763 = await XenoFelixiFcKtp.removePauser.call(addressMddzMo, {from: accounts[1]});

		assert.equal(uint256kKFRz5a, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringpSWfDaC = "cxGoQnUEDvWW6XOaQtYelUCYbwgwByM6iObbE1ZPjQ6npOkDnHUCHJVJI9f"
		const stringMuFpv4w = "HdiLF"
		const uintwf87VuI = BigInt("1811")
		const uintKekToeR = BigInt("196")
		const XenoFelixiFcKtp = await XenoFelix.new(stringpSWfDaC, stringMuFpv4w, uintwf87VuI, uintKekToeR, {from: accounts[1]});
		const addressqbTs3R8 = "0x0000000000000000000000000000000000000001"
		const addressZPOEGaY = accounts[7]
		const uint256lYXybKp = await XenoFelixiFcKtp.totalSupply.call({from: accounts[0]});
		const boolsbadXQl = await XenoFelixiFcKtp.freezeAccount.call(addressqbTs3R8, {from: "0x0000000000000000000000000000000000000001"});
		const uint256kKFRz5a = await XenoFelixiFcKtp.balanceOf.call(addressZPOEGaY, {from: accounts[2]});

		assert.equal(uint256lYXybKp, BigInt("67303217094307649826796392767066090813839983977883958612550946285152762855424"))
		await expect(XenoFelixiFcKtp.freezeAccount.call(addressqbTs3R8, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringqCGbciE = "GuC"
		const stringvwbVXEU = "NhPNGjdLarmGTVVVfGtUDjWg2z4rVF2i3jjbxfjlgqGUna8uP8jFo6QktVsugb6pHrTZKIy9APOgjhzdM5S5pTBP"
		const uint5NNs9m = BigInt("2018")
		const uintZngtMoo = BigInt("106")
		const XenoFelixA5L8WVE = await XenoFelix.new(stringqCGbciE, stringvwbVXEU, uint5NNs9m, uintZngtMoo, {from: accounts[5]});
		const uintV8ymcow = BigInt("262")
		const uintou3YEt = BigInt("159")
		const addressV9Rxpdz = accounts[5]
		const addressjr4mJx = accounts[4]
		const addressr6fzNaX = accounts[1]
		const addressXCT6hwB = accounts[2]
		const uint256E6kvO1 = await XenoFelixA5L8WVE.burn.call(uintV8ymcow, {from: accounts[3]});
		const boolNyYKu3g = await XenoFelixA5L8WVE.transfer.call(addressV9Rxpdz, uintou3YEt, {from: accounts[2]});
		const uint256basPWdO = await XenoFelixA5L8WVE.balanceOf.call(addressjr4mJx, {from: "0x0000000000000000000000000000000000000001"});
		const addresskVHqKm = await XenoFelixA5L8WVE.notFrozenAndTransaction.call(addressXCT6hwB, addressr6fzNaX, {from: accounts[4]});
		await XenoFelixA5L8WVE.renouncePauser.call({from: accounts[0]});
		const uint8BFBtjpH = await XenoFelixA5L8WVE.decimals.call({from: accounts[5]});

		await expect(XenoFelixA5L8WVE.burn.call(uintV8ymcow, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringpSWfDaC = "cxGoQnUEDvWW6XOaQtYelUCYbwgwByM6iObbE1ZPjQ6npOkDnHUCHJVJI9f"
		const stringMuFpv4w = "HdiLF"
		const uintAHKw06C = BigInt("1811")
		const uintBfBgxLI = BigInt("196")
		const XenoFelixiFcKtp = await XenoFelix.new(stringpSWfDaC, stringMuFpv4w, uintAHKw06C, uintBfBgxLI, {from: accounts[1]});
		const uintzNOZcqv = BigInt("1446")
		const addressZYowIM1 = accounts[1]
		const addressvQ5hhLm = accounts[2]
		const addressGxzdC6d = accounts[2]
		const uintvXDic6R = BigInt("286")
		const addresskD8wPhs = accounts[2]
		const addressS1gT6SQ = accounts[4]
		const boolxlFbjEK = await XenoFelixiFcKtp.increaseAllowance.call(addressZYowIM1, uintzNOZcqv, {from: accounts[2]});
		await XenoFelixiFcKtp.onlyPauser.call({from: accounts[3]});
		const uint256ItvrYN = await XenoFelixiFcKtp.allowance.call(addressGxzdC6d, addressvQ5hhLm, {from: accounts[4]});
		const boolW7yceUm = await XenoFelixiFcKtp.transferFrom.call(addressS1gT6SQ, addresskD8wPhs, uintvXDic6R, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolxlFbjEK, true)
		await expect(XenoFelixiFcKtp.onlyPauser.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringpSWfDaC = "cxGoQnUEDvWW6XOaQtYelUCYbwgwByM6iObbE1ZPjQ6npOkDnHUCHJVJI9f"
		const stringMuFpv4w = "HdiLF"
		const uintw7KaB4 = BigInt("1811")
		const uintPi5JWYU = BigInt("196")
		const XenoFelixiFcKtp = await XenoFelix.new(stringpSWfDaC, stringMuFpv4w, uintw7KaB4, uintPi5JWYU, {from: accounts[1]});
		const addressJtNwQkh = accounts[1]
		const addressQVxnefX = accounts[1]
		const uintExEozAB = BigInt("286")
		const addressR7uK06x = accounts[2]
		const addressYdJIPm = accounts[5]
		const addressZsHXTvz = await XenoFelixiFcKtp.addPauser.call(addressJtNwQkh, {from: accounts[1]});
		const addressgFg3MiW = await XenoFelixiFcKtp.removePauser.call(addressQVxnefX, {from: accounts[3]});
		const boolW7yceUm = await XenoFelixiFcKtp.transferFrom.call(addressYdJIPm, addressR7uK06x, uintExEozAB, {from: "0x0000000000000000000000000000000000000001"});

		await expect(XenoFelixiFcKtp.addPauser.call(addressJtNwQkh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringySXS4f2 = "4aJQfNPinUawi6TDGtMzpfrARJXM0GNEN2ExNXeLzDvOeN0JgkXDK9TMKGp2tMt3N22c5Gj3bPat5Ojlmsz8JOPxdJ0HP8dqP"
		const stringyTncVpq = "IovHd8Q8vNm5a2MdY2sX4SXYixy5TcOJTjda8LC7qzIqEnKGJU65tdLjG3oQTBHoxnTOAGVY9t51lmqsWRbRVr"
		const uintLC01y0X = BigInt("19")
		const XenoFelixU4lut1v = await XenoFelix.new(stringySXS4f2, stringyTncVpq, uintLC01y0X, {from: accounts[2]});
		const addressbDnxtS = accounts[1]
		const uintilFcDG6 = BigInt("125")
		const addressDFa2kZ = accounts[2]
		const addresshDgjQEP = accounts[0]
		const addressAV0smP = accounts[1]
		const uint256MpofbnD = await XenoFelixU4lut1v.balanceOf.call(addressbDnxtS, {from: accounts[3]});
		const boolHEltP50 = await XenoFelixU4lut1v.transferFrom.call(addresshDgjQEP, addressDFa2kZ, uintilFcDG6, {from: accounts[2]});
		const boolkohUWvL = await XenoFelixU4lut1v.isPauser.call(addressAV0smP, {from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringpSWfDaC = "cxGoQnUEDvWW6XOaQtYelUCYbwgwByM6iObbE1ZPjQ6npOkDnHUCHJVJI9f"
		const stringMuFpv4w = "HdiLF"
		const uintpQyTlM6 = BigInt("1811")
		const uintCEpt12W = BigInt("196")
		const XenoFelixiFcKtp = await XenoFelix.new(stringpSWfDaC, stringMuFpv4w, uintpQyTlM6, uintCEpt12W, {from: accounts[1]});
		const addressTPyoIUT = accounts[3]
		const addressCxZGI2d = accounts[3]
		const addressUDzmEaD = accounts[7]
		const uint256jBOsdTR = await XenoFelixiFcKtp.allowance.call(addressCxZGI2d, addressTPyoIUT, {from: accounts[5]});
		const uint256kKFRz5a = await XenoFelixiFcKtp.balanceOf.call(addressUDzmEaD, {from: accounts[2]});
		const boolvs667M = await XenoFelixiFcKtp.paused.call({from: accounts[4]});

		assert.equal(boolvs667M, false)
		assert.equal(uint256jBOsdTR, BigInt("0"))
		assert.equal(uint256kKFRz5a, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringpSWfDaC = "cxGoQnUEDvWW6XOaQtYelUCYbwgwByM6iObbE1ZPjQ6npOkDnHUCHJVJI9f"
		const stringMuFpv4w = "HdiLF"
		const uinttFvOvpB = BigInt("1811")
		const uintEnkaOL = BigInt("196")
		const XenoFelixiFcKtp = await XenoFelix.new(stringpSWfDaC, stringMuFpv4w, uinttFvOvpB, uintEnkaOL, {from: accounts[1]});
		const addressImVBPnA = accounts[7]
		const uint256kKFRz5a = await XenoFelixiFcKtp.balanceOf.call(addressImVBPnA, {from: accounts[2]});
		await XenoFelixiFcKtp.renouncePauser.call({from: accounts[2]});

		assert.equal(uint256kKFRz5a, BigInt("0"))
		await expect(XenoFelixiFcKtp.renouncePauser.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringpSWfDaC = "cxGoQnUEDvWW6XOaQtYelUCYbwgwByM6iObbE1ZPjQ6npOkDnHUCHJVJI9f"
		const stringMuFpv4w = "HdiLF"
		const uintKKnKGXy = BigInt("1811")
		const uintkEIPdJH = BigInt("196")
		const XenoFelixiFcKtp = await XenoFelix.new(stringpSWfDaC, stringMuFpv4w, uintKKnKGXy, uintkEIPdJH, {from: accounts[1]});
		const uinteCxnTRd = BigInt("60")
		const addressRf4VME = accounts[0]
		const uintDoXrROZ = BigInt("286")
		const addressKMG98Qm = accounts[2]
		const addressYOMyB4k = accounts[4]
		const boolHsJDjVn = await XenoFelixiFcKtp.approve.call(addressRf4VME, uinteCxnTRd, {from: accounts[4]});
		const boolArMtUes = await XenoFelixiFcKtp.acceptOwnership.call({from: accounts[2]});
		const boolW7yceUm = await XenoFelixiFcKtp.transferFrom.call(addressYOMyB4k, addressKMG98Qm, uintDoXrROZ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolHsJDjVn, true)
		await expect(XenoFelixiFcKtp.acceptOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringpSWfDaC = "cxGoQnUEDvWW6XOaQtYelUCYbwgwByM6iObbE1ZPjQ6npOkDnHUCHJVJI9f"
		const stringMuFpv4w = "HdiLF"
		const uintw3z0bOE = BigInt("1811")
		const uintTbdf24z = BigInt("196")
		const XenoFelixiFcKtp = await XenoFelix.new(stringpSWfDaC, stringMuFpv4w, uintw3z0bOE, uintTbdf24z, {from: accounts[1]});
		const uint63P4NN = BigInt("565")
		const addressQ1yckNI = accounts[2]
		const addressZPSwSWk = accounts[3]
		const addressQsAH3Vm = accounts[7]
		await XenoFelixiFcKtp.pause.call({from: accounts[1]});
		const uint8UdkmB2C = await XenoFelixiFcKtp.decimals.call({from: accounts[2]});
		const boolqj2w06s = await XenoFelixiFcKtp.transferFrom.call(addressZPSwSWk, addressQ1yckNI, uint63P4NN, {from: accounts[1]});
		const uint256kKFRz5a = await XenoFelixiFcKtp.balanceOf.call(addressQsAH3Vm, {from: accounts[2]});

		await expect(XenoFelixiFcKtp.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringpSWfDaC = "cxGoQnUEDvWW6XOaQtYelUCYbwgwByM6iObbE1ZPjQ6npOkDnHUCHJVJI9f"
		const stringMuFpv4w = "HdiLF"
		const uintA7idfAN = BigInt("1811")
		const uintcp56L8Y = BigInt("196")
		const XenoFelixiFcKtp = await XenoFelix.new(stringpSWfDaC, stringMuFpv4w, uintA7idfAN, uintcp56L8Y, {from: accounts[1]});
		const uintENsGX8I = BigInt("304")
		const addresstcuHViq = "0x0000000000000000000000000000000000000001"
		const addressNfepBGM = accounts[6]
		const stringhE2OzPm = await XenoFelixiFcKtp.name.call({from: accounts[4]});
		const boolA4oJB6 = await XenoFelixiFcKtp.burnOwner.call(addresstcuHViq, uintENsGX8I, {from: accounts[1]});
		const uint256kKFRz5a = await XenoFelixiFcKtp.balanceOf.call(addressNfepBGM, {from: accounts[2]});

		assert.equal(stringhE2OzPm, "cxGoQnUEDvWW6XOaQtYelUCYbwgwByM6iObbE1ZPjQ6npOkDnHUCHJVJI9f")
		await expect(XenoFelixiFcKtp.burnOwner.call(addresstcuHViq, uintENsGX8I, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringpSWfDaC = "cxGoQnUEDvWW6XOaQtYelUCYbwgwByM6iObbE1ZPjQ6npOkDnHUCHJVJI9f"
		const stringMuFpv4w = "HdiLF"
		const uintkX5Pfgw = BigInt("1811")
		const uintMCXsCW9 = BigInt("196")
		const XenoFelixiFcKtp = await XenoFelix.new(stringpSWfDaC, stringMuFpv4w, uintkX5Pfgw, uintMCXsCW9, {from: accounts[1]});
		const addresss6qIJu = accounts[0]
		const addressoTN6pOH = accounts[2]
		const addressokw4HS7 = accounts[2]
		const addressKyHoMUe = accounts[7]
		const boolOk19xS8 = await XenoFelixiFcKtp.freezeAccount.call(addresss6qIJu, {from: accounts[1]});
		const addressxHkM6Wp = await XenoFelixiFcKtp.notFrozenAndTransaction.call(addressokw4HS7, addressoTN6pOH, {from: accounts[3]});
		const uint256kKFRz5a = await XenoFelixiFcKtp.balanceOf.call(addressKyHoMUe, {from: accounts[2]});

		assert.equal(boolOk19xS8, true)
		await expect(XenoFelixiFcKtp.notFrozenAndTransaction.call(addressokw4HS7, addressoTN6pOH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringpSWfDaC = "cxGoQnUEDvWW6XOaQtYelUCYbwgwByM6iObbE1ZPjQ6npOkDnHUCHJVJI9f"
		const stringMuFpv4w = "HdiLF"
		const uintwYELaoU = BigInt("1811")
		const uintaqte3zx = BigInt("196")
		const XenoFelixiFcKtp = await XenoFelix.new(stringpSWfDaC, stringMuFpv4w, uintwYELaoU, uintaqte3zx, {from: accounts[1]});
		const uintORPSul7 = BigInt("529")
		const uintsiPPr9C = BigInt("1322")
		const addressuFy5Lxf = "0x0000000000000000000000000000000000000001"
		const uintqTtaYoS = BigInt("212")
		const addressgF9pB4H = accounts[0]
		const addressw4LenWZ = "0x0000000000000000000000000000000000000001"
		const uintWktbp9N = BigInt("286")
		const addressindHdl1 = accounts[2]
		const addresset0Av6w = accounts[5]
		const booljoeT19O = await XenoFelixiFcKtp.transferWithLock.call(addressuFy5Lxf, uintsiPPr9C, uintORPSul7, {from: accounts[1]});
		const boolCD6hkK6 = await XenoFelixiFcKtp.transferFrom.call(addressw4LenWZ, addressgF9pB4H, uintqTtaYoS, {from: accounts[1]});
		const boolW7yceUm = await XenoFelixiFcKtp.transferFrom.call(addresset0Av6w, addressindHdl1, uintWktbp9N, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booljoeT19O, true)
		await expect(XenoFelixiFcKtp.transferFrom.call(addressw4LenWZ, addressgF9pB4H, uintqTtaYoS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})