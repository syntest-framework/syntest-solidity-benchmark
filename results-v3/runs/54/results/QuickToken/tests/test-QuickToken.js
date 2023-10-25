const QuickToken = artifacts.require("QuickToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('QuickToken', (accounts) => {
	it('test for QuickToken', async () => {
		const addressb9ilXsD = accounts[4]
		const addressvStOqm5 = accounts[0]
		const QuickTokenDmnjP9J = await QuickToken.new(addressb9ilXsD, addressvStOqm5, {from: accounts[3]});
		const addressTk6Q7eZ = accounts[1]
		const addressbSMhpPx = accounts[0]
		const uintCgu3JxO = BigInt("811")
		const addressGff5twF = accounts[1]
		const uintQWE6Sly = await QuickTokenDmnjP9J.balanceOf.call(addressTk6Q7eZ, {from: accounts[0]});
		const addressFf33LGr = await QuickTokenDmnjP9J.setMinter.call(addressbSMhpPx, {from: accounts[2]});
		const addressRSI62vB = await QuickTokenDmnjP9J.mint.call(addressGff5twF, uintCgu3JxO, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintQWE6Sly, BigInt("0"))
		await expect(QuickTokenDmnjP9J.setMinter.call(addressbSMhpPx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressxf9lWyf = accounts[4]
		const addressMRLE0Zu = accounts[4]
		const QuickTokenNdERQNH = await QuickToken.new(addressxf9lWyf, addressMRLE0Zu, {from: accounts[3]});
		const uintfoGbvR = BigInt("1770")
		const addressmjuUc1 = accounts[1]
		const uintHxNn3CP = BigInt("538")
		const addressTGkLUim = accounts[3]
		const addressgefsocy = accounts[0]
		const addressvzF0ycn = accounts[2]
		const boolk0vZxeq = await QuickTokenNdERQNH.transfer.call(addressmjuUc1, uintfoGbvR, {from: accounts[3]});
		const bool85cKB9 = await QuickTokenNdERQNH.transfer.call(addressTGkLUim, uintHxNn3CP, {from: accounts[4]});
		const uintkteGR5D = await QuickTokenNdERQNH.allowance.call(addressvzF0ycn, addressgefsocy, {from: accounts[4]});

		await expect(QuickTokenNdERQNH.transfer.call(addressmjuUc1, uintfoGbvR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addresslMcKSTi = "0x0000000000000000000000000000000000000001"
		const addressAptDE5n = accounts[0]
		const QuickToken8oss7s = await QuickToken.new(addresslMcKSTi, addressAptDE5n, {from: accounts[2]});
		const addressskdCuB = accounts[1]
		const addressp2HZ4T = "0x0000000000000000000000000000000000000001"
		const addressDirXmh8 = accounts[2]
		const addressLz9s6bQ = accounts[2]
		const uintE9prMx = await QuickToken8oss7s.balanceOf.call(addressskdCuB, {from: accounts[5]});
		const uintIttrqNt = await QuickToken8oss7s.balanceOf.call(addressp2HZ4T, {from: accounts[2]});
		const uintnQCzGVy = await QuickToken8oss7s.allowance.call(addressLz9s6bQ, addressDirXmh8, {from: accounts[4]});

		assert.equal(uintE9prMx, BigInt("0"))
		assert.equal(uintIttrqNt, BigInt("2000000000000"))
		assert.equal(uintnQCzGVy, BigInt("0"))
	});

	it('test for QuickToken', async () => {
		const addressE11R61Z = accounts[2]
		const addressEUmgVk = accounts[4]
		const QuickTokenxIVsZLQ = await QuickToken.new(addressE11R61Z, addressEUmgVk, {from: accounts[1]});
		const uintHzYV2C = BigInt("1464")
		const addressx7IioAK = accounts[3]
		const addressjfjgtHu = accounts[3]
		const uintGHbCIxI = BigInt("302")
		const addressUIuOZcH = accounts[2]
		const uintgOdQsFh = BigInt("1930")
		const addressPIuH48e = accounts[0]
		const boolvQaEqid = await QuickTokenxIVsZLQ.transferFrom.call(addressjfjgtHu, addressx7IioAK, uintHzYV2C, {from: "0x0000000000000000000000000000000000000001"});
		const boolttBwezx = await QuickTokenxIVsZLQ.transfer.call(addressUIuOZcH, uintGHbCIxI, {from: accounts[4]});
		const boolEQI6fxi = await QuickTokenxIVsZLQ.approve.call(addressPIuH48e, uintgOdQsFh, {from: accounts[0]});

		await expect(QuickTokenxIVsZLQ.transferFrom.call(addressjfjgtHu, addressx7IioAK, uintHzYV2C, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressAGqAnwp = accounts[0]
		const addresshFdH31Y = "0x0000000000000000000000000000000000000001"
		const QuickTokenSVpp2fb = await QuickToken.new(addressAGqAnwp, addresshFdH31Y, {from: accounts[5]});
		const addresssXnPgbk = accounts[0]
		const uintxK16Sc = BigInt("164")
		const addressFR25gld = accounts[2]
		const uintbTjzUhg = BigInt("1646")
		const addresspYE4Z0o = accounts[1]
		const addressGKLDTU9 = accounts[1]
		const uintA7WDR7D = BigInt("1221")
		const addressJ5JZ51C = accounts[1]
		const addressDWTeUNs = accounts[2]
		const uintuavj5SF = await QuickTokenSVpp2fb.balanceOf.call(addresssXnPgbk, {from: accounts[4]});
		const addressXQLOD0 = await QuickTokenSVpp2fb.mint.call(addressFR25gld, uintxK16Sc, {from: accounts[4]});
		const booliwuBQXF = await QuickTokenSVpp2fb.transfer.call(addresspYE4Z0o, uintbTjzUhg, {from: accounts[2]});
		const uintKMTwrKz = await QuickTokenSVpp2fb.balanceOf.call(addressGKLDTU9, {from: accounts[3]});
		const boolbOAvKU3 = await QuickTokenSVpp2fb.transferFrom.call(addressDWTeUNs, addressJ5JZ51C, uintA7WDR7D, {from: accounts[3]});

		assert.equal(uintuavj5SF, BigInt("2000000000000"))
		await expect(QuickTokenSVpp2fb.mint.call(addressFR25gld, uintxK16Sc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressqIYLRHj = accounts[1]
		const addressAT0WbPl = accounts[3]
		const QuickTokenbcdmhms = await QuickToken.new(addressqIYLRHj, addressAT0WbPl, {from: accounts[1]});
		const addressYlGE2ic = accounts[3]
		const uintivd566z = BigInt("121")
		const addressYMGbtHC = accounts[3]
		const addressjpG5B09 = accounts[2]
		const addressSH8ZgTY = accounts[2]
		const addressynft8a = accounts[0]
		const uintHc7Pmz = BigInt("751")
		const addresssVh2mgd = accounts[2]
		const uintCNcyVY7 = await QuickTokenbcdmhms.balanceOf.call(addressYlGE2ic, {from: accounts[1]});
		const boolqzH9sF2 = await QuickTokenbcdmhms.approve.call(addressYMGbtHC, uintivd566z, {from: accounts[4]});
		const addressy20YKnj = await QuickTokenbcdmhms.setMinter.call(addressjpG5B09, {from: accounts[2]});
		const uintUJ6rsl = await QuickTokenbcdmhms.allowance.call(addressynft8a, addressSH8ZgTY, {from: accounts[3]});
		const addressFsdEb4V = await QuickTokenbcdmhms.mint.call(addresssVh2mgd, uintHc7Pmz, {from: accounts[2]});

		assert.equal(boolqzH9sF2, true)
		assert.equal(uintCNcyVY7, BigInt("0"))
		await expect(QuickTokenbcdmhms.setMinter.call(addressjpG5B09, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressAtp7zcT = accounts[1]
		const addressIb3px8W = accounts[3]
		const QuickTokenbcdmhms = await QuickToken.new(addressAtp7zcT, addressIb3px8W, {from: accounts[1]});
		const uintGRN0Ioy = BigInt("801")
		const addressBRJEtjB = accounts[2]
		const addressXYfugUG = accounts[3]
		const addressG66U373 = accounts[0]
		const addressuuRCb29 = accounts[2]
		const uintIHAxX6O = BigInt("132")
		const addressUTEu6J4 = accounts[3]
		const addressf5LrEaB = accounts[2]
		const addresslELhErU = accounts[0]
		const addressq1iSTTL = await QuickTokenbcdmhms.mint.call(addressBRJEtjB, uintGRN0Ioy, {from: accounts[3]});
		const uintCNcyVY7 = await QuickTokenbcdmhms.balanceOf.call(addressXYfugUG, {from: accounts[1]});
		const uintVRonmZG = await QuickTokenbcdmhms.allowance.call(addressuuRCb29, addressG66U373, {from: accounts[2]});
		const boolqzH9sF2 = await QuickTokenbcdmhms.approve.call(addressUTEu6J4, uintIHAxX6O, {from: accounts[4]});
		const uintUJ6rsl = await QuickTokenbcdmhms.allowance.call(addresslELhErU, addressf5LrEaB, {from: accounts[3]});

		assert.equal(boolqzH9sF2, true)
		assert.equal(uintCNcyVY7, BigInt("0"))
		assert.equal(uintUJ6rsl, BigInt("0"))
		assert.equal(uintVRonmZG, BigInt("0"))
	});

	it('test for QuickToken', async () => {
		const addressw0lFPfv = accounts[0]
		const addressLvDRCtr = accounts[5]
		const QuickTokenR1XysIB = await QuickToken.new(addressw0lFPfv, addressLvDRCtr, {from: "0x0000000000000000000000000000000000000001"});
		const addressKGvdl0 = accounts[0]
		const addressRGoW6DN = accounts[4]
		const addressnhBviV = accounts[0]
		const addresscvSjxR3 = accounts[5]
		const uintbn2wfAf = await QuickTokenR1XysIB.balanceOf.call(addressKGvdl0, {from: accounts[2]});
		const addressjbOuIcJ = await QuickTokenR1XysIB.setMinter.call(addressRGoW6DN, {from: accounts[4]});
		const uint34mTFT = await QuickTokenR1XysIB.allowance.call(addresscvSjxR3, addressnhBviV, {from: accounts[1]});
	});
})