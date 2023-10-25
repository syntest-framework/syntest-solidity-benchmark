const Ledgis = artifacts.require("Ledgis");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ledgis', (accounts) => {
	it('test for Ledgis', async () => {
		const LedgisyZhFvhK = await Ledgis.new({from: accounts[0]});
		const uintCeuTMdu = BigInt("1817")
		const addressbzgPsV = accounts[0]
		const uintxm2yIzF = BigInt("1878")
		const uintSFfobr = BigInt("1404")
		const addressBvHK3Za = accounts[2]
		const addressx7Gkysi = accounts[4]
		const addressvrS1oZP = accounts[3]
//		await LedgisyZhFvhK.onlyOwner.call({from: accounts[2]});
//		const boolAGyKuty = await LedgisyZhFvhK.approve.call(addressbzgPsV, uintCeuTMdu, {from: accounts[4]});
//		const boolsKEWmUu = await LedgisyZhFvhK.transferWithLock.call(addressBvHK3Za, uintSFfobr, uintxm2yIzF, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256LrXWx5t = await LedgisyZhFvhK.lockCount.call(addressx7Gkysi, {from: "0x0000000000000000000000000000000000000001"});
//		const addressmuoKcdW = await LedgisyZhFvhK.unfreeze.call(addressvrS1oZP, {from: accounts[0]});

		await expect(LedgisyZhFvhK.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisyktCSMx = await Ledgis.new({from: accounts[0]});
		const uintUCnE9cS = BigInt("1333")
		const uintEUIIJYr = BigInt("1270")
		const addressLSymX1a = accounts[3]
		const addressbmoA6uA = accounts[5]
		const addressqmvyOGm = accounts[1]
//		const addressXkBzjkZ = await LedgisyktCSMx.lock.call(addressLSymX1a, uintEUIIJYr, uintUCnE9cS, {from: accounts[4]});
//		const uint256m4BTKLE = await LedgisyktCSMx.balanceOf.call(addressbmoA6uA, {from: accounts[1]});
//		await LedgisyktCSMx.unpause.call({from: accounts[3]});
//		const boolcIzkgoU = await LedgisyktCSMx.isFrozen.call(addressqmvyOGm, {from: accounts[5]});

		await expect(LedgisyktCSMx.lock.call(addressLSymX1a, uintEUIIJYr, uintUCnE9cS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisf9dASmv = await Ledgis.new({from: accounts[4]});
		const uintNwlTXB2 = BigInt("1581")
		const addressWYgz1Uv = accounts[5]
		const address4ykvGj = accounts[5]
		const addressFefMov = accounts[1]
//		await Ledgisf9dASmv.lockState.call(addressWYgz1Uv, uintNwlTXB2, {from: "0x0000000000000000000000000000000000000001"});
//		await Ledgisf9dASmv.renounceOwnership.call({from: accounts[1]});
//		const uint256R0OwRBg = await Ledgisf9dASmv.allowance.call(addressFefMov, address4ykvGj, {from: accounts[0]});

		await expect(Ledgisf9dASmv.lockState.call(addressWYgz1Uv, uintNwlTXB2, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgistLTUEvs = await Ledgis.new({from: accounts[3]});
		const uintGwbvNkk = BigInt("440")
		const addressXO7oJ9F = accounts[4]
		const uintaK7HmyX = BigInt("538")
		const addressq1wRbQ = accounts[5]
//		const boolTlkY69f = await LedgistLTUEvs.transfer.call(addressXO7oJ9F, uintGwbvNkk, {from: accounts[4]});
//		await LedgistLTUEvs.onlyOwner.call({from: accounts[1]});
//		await LedgistLTUEvs.onlyOwner.call({from: accounts[0]});
//		const boolpFPjugr = await LedgistLTUEvs.transfer.call(addressq1wRbQ, uintaK7HmyX, {from: accounts[3]});

		await expect(LedgistLTUEvs.transfer.call(addressXO7oJ9F, uintGwbvNkk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisXxdzIUx = await Ledgis.new({from: accounts[1]});
		const uintqRUl02S = BigInt("201")
		const addressNgyYswR = accounts[4]
		const addressUzn70ly = accounts[3]
		const addressFegBgia = accounts[4]
		const boolVlLbKUq = await LedgisXxdzIUx.increaseAllowance.call(addressNgyYswR, uintqRUl02S, {from: accounts[0]});
		const boolt3oj0Da = await LedgisXxdzIUx.isFrozen.call(addressUzn70ly, {from: accounts[3]});
		const uint256KJ3ifYI = await LedgisXxdzIUx.balanceOf.call(addressFegBgia, {from: accounts[1]});

		assert.equal(boolVlLbKUq, true)
		assert.equal(boolt3oj0Da, false)
		assert.equal(uint256KJ3ifYI, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisUxYDuV8 = await Ledgis.new({from: accounts[2]});
		const uintulNPNpx = BigInt("1100")
		const addressLA1We1h = accounts[3]
		const addressfYsp1jr = accounts[1]
		const uintmFDhk74 = BigInt("665")
		const addressI2mhm0N = "0x0000000000000000000000000000000000000001"
		const addressEfNMOyD = accounts[0]
//		const boollzkGx58 = await LedgisUxYDuV8.transferFrom.call(addressfYsp1jr, addressLA1We1h, uintulNPNpx, {from: accounts[3]});
//		const uint256mPWiUQ3 = await LedgisUxYDuV8.currentTime.call({from: accounts[0]});
//		const uint256tsv5sL = await LedgisUxYDuV8.currentTime.call({from: accounts[0]});
//		const boolMX5VGly = await LedgisUxYDuV8.transferFrom.call(addressEfNMOyD, addressI2mhm0N, uintmFDhk74, {from: accounts[1]});

		await expect(LedgisUxYDuV8.transferFrom.call(addressfYsp1jr, addressLA1We1h, uintulNPNpx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisUxYDuV8 = await Ledgis.new({from: accounts[2]});
		const uint256tsv5sL = await LedgisUxYDuV8.currentTime.call({from: accounts[0]});

		assert.equal(uint256tsv5sL, BigInt("1630229803"))
	});

	it('test for Ledgis', async () => {
		const LedgisXxdzIUx = await Ledgis.new({from: accounts[1]});
		const uintH5b9GrD = BigInt("201")
		const addressN7o52R9 = accounts[4]
		const addressuWOFW8f = accounts[4]
		const addressBI1k2XR = accounts[4]
		const boolVlLbKUq = await LedgisXxdzIUx.increaseAllowance.call(addressN7o52R9, uintH5b9GrD, {from: accounts[0]});
		const boolt3oj0Da = await LedgisXxdzIUx.isFrozen.call(addressuWOFW8f, {from: accounts[3]});
		const uint256KJ3ifYI = await LedgisXxdzIUx.balanceOf.call(addressBI1k2XR, {from: accounts[1]});
		const uint256Stgilys = await LedgisXxdzIUx.totalSupply.call({from: accounts[3]});

		assert.equal(boolVlLbKUq, true)
		assert.equal(boolt3oj0Da, false)
		assert.equal(uint256KJ3ifYI, BigInt("0"))
		assert.equal(uint256Stgilys, BigInt("10000000000000"))
	});

	it('test for Ledgis', async () => {
		const LedgisUxYDuV8 = await Ledgis.new({from: accounts[2]});
		const uintMYkSjI3 = BigInt("1503")
		const addresssDDTYlF = accounts[2]
		const boolqrq7nZs = await LedgisUxYDuV8.approve.call(addresssDDTYlF, uintMYkSjI3, {from: accounts[2]});
		const uint2561tUyx5 = await LedgisUxYDuV8.totalSupply.call({from: accounts[3]});
		const uint256tsv5sL = await LedgisUxYDuV8.currentTime.call({from: accounts[0]});

		assert.equal(boolqrq7nZs, true)
		assert.equal(uint2561tUyx5, BigInt("10000000000000"))
		assert.equal(uint256tsv5sL, BigInt("1630229808"))
	});

	it('test for Ledgis', async () => {
		const LedgisUxYDuV8 = await Ledgis.new({from: accounts[2]});
		const uintPvyoQTp = BigInt("1323")
		const addressZi5dEVO = accounts[1]
		const uintVyqazj = BigInt("684")
		const addressLU3ZpIY = accounts[2]
		const address3Xy6KO = accounts[0]
		const uint256tsv5sL = await LedgisUxYDuV8.currentTime.call({from: accounts[0]});
//		const boolOlES6nO = await LedgisUxYDuV8.decreaseAllowance.call(addressZi5dEVO, uintPvyoQTp, {from: accounts[2]});
//		const boolUNafgq6 = await LedgisUxYDuV8.transfer.call(addressLU3ZpIY, uintVyqazj, {from: accounts[2]});
//		const uint256GuVj60j = await LedgisUxYDuV8.balanceOf.call(address3Xy6KO, {from: accounts[0]});

		assert.equal(uint256tsv5sL, BigInt("1630229814"))
		await expect(LedgisUxYDuV8.decreaseAllowance.call(addressZi5dEVO, uintPvyoQTp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgistLTUEvs = await Ledgis.new({from: accounts[3]});
		const addressUNMBXgI = accounts[4]
		const addressc6U6pA3 = accounts[1]
		const uintPRsjy9D = BigInt("440")
		const addressj8D0VLp = accounts[4]
		const addressj6lhLex = accounts[3]
		const uintQQk5vBv = BigInt("538")
		const addressfmxbuoA = accounts[5]
		const uint256ZB6ILo5 = await LedgistLTUEvs.allowance.call(addressc6U6pA3, addressUNMBXgI, {from: accounts[0]});
//		const boolTlkY69f = await LedgistLTUEvs.transfer.call(addressj8D0VLp, uintPRsjy9D, {from: accounts[4]});
//		const addresssmTCKcT = await LedgistLTUEvs.transferOwnership.call(addressj6lhLex, {from: accounts[5]});
//		const boolpFPjugr = await LedgistLTUEvs.transfer.call(addressfmxbuoA, uintQQk5vBv, {from: accounts[3]});

		assert.equal(uint256ZB6ILo5, BigInt("0"))
		await expect(LedgistLTUEvs.transfer.call(addressj8D0VLp, uintPRsjy9D, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgistLTUEvs = await Ledgis.new({from: accounts[3]});
		const uintfg61wDV = BigInt("1482")
		const uintybSGiX = BigInt("1357")
		const addresstXD4UqV = accounts[3]
		const uintN3XmN30 = BigInt("440")
		const addressFwJiOA8 = accounts[4]
		const uintl53NneW = BigInt("543")
		const addressIFkTWKW = accounts[5]
		const addressvdwqN85 = await LedgistLTUEvs.lock.call(addresstXD4UqV, uintybSGiX, uintfg61wDV, {from: accounts[3]});
//		const boolTlkY69f = await LedgistLTUEvs.transfer.call(addressFwJiOA8, uintN3XmN30, {from: accounts[4]});
//		const boolpFPjugr = await LedgistLTUEvs.transfer.call(addressIFkTWKW, uintl53NneW, {from: accounts[3]});

		await expect(LedgistLTUEvs.transfer.call(addressFwJiOA8, uintN3XmN30, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisUxYDuV8 = await Ledgis.new({from: accounts[2]});
		const uintFdqlixl = BigInt("1222")
		const uintS8nM1Kh = BigInt("1626")
		const addressJrJs3G3 = accounts[3]
		const addressAetSHxp = accounts[2]
		const boolfdhaTCb = await LedgisUxYDuV8.transferWithLock.call(addressJrJs3G3, uintS8nM1Kh, uintFdqlixl, {from: accounts[2]});
		const uint256GuVj60j = await LedgisUxYDuV8.balanceOf.call(addressAetSHxp, {from: accounts[0]});

		assert.equal(boolfdhaTCb, true)
		assert.equal(uint256GuVj60j, BigInt("10000000000000"))
	});

	it('test for Ledgis', async () => {
		const LedgisUxYDuV8 = await Ledgis.new({from: accounts[2]});
		const addressLep6X3W = accounts[1]
		const addresstkym1pm = accounts[2]
		const addressary173F = await LedgisUxYDuV8.unfreeze.call(addressLep6X3W, {from: accounts[2]});
		const uint256GuVj60j = await LedgisUxYDuV8.balanceOf.call(addresstkym1pm, {from: accounts[0]});

		assert.equal(uint256GuVj60j, BigInt("10000000000000"))
	});

	it('test for Ledgis', async () => {
		const LedgistLTUEvs = await Ledgis.new({from: accounts[3]});
		const addressP9RfV93 = accounts[2]
		const uintXnxWdlJ = BigInt("563")
		const addresskPJUdWp = accounts[6]
		const addressNsa4pvx = accounts[0]
		const uint256aGbrERU = await LedgistLTUEvs.balanceOf.call(addressP9RfV93, {from: accounts[4]});
		const boolpFPjugr = await LedgistLTUEvs.transfer.call(addresskPJUdWp, uintXnxWdlJ, {from: accounts[3]});
		const uint256BlmMiQ = await LedgistLTUEvs.lockCount.call(addressNsa4pvx, {from: accounts[4]});

		assert.equal(boolpFPjugr, true)
		assert.equal(uint256BlmMiQ, BigInt("0"))
		assert.equal(uint256aGbrERU, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisT40VVqe = await Ledgis.new({from: "0x0000000000000000000000000000000000000001"});
		const uintlQNICDB = BigInt("792")
		const uintML4n9bU = BigInt("830")
		const addressQryuGgJ = accounts[0]
		const addresslpcYFkQ = accounts[3]
		const addressrs5or3f = accounts[3]
		const uint256FZdJ055 = await LedgisT40VVqe.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const addressBMkUGU = await LedgisT40VVqe.lockAfter.call(addressQryuGgJ, uintML4n9bU, uintlQNICDB, {from: accounts[5]});
		const boolU8rPq8O = await LedgisT40VVqe.isFrozen.call(addresslpcYFkQ, {from: accounts[0]});
		await LedgisT40VVqe.unpause.call({from: accounts[2]});
		const uint256W7xAzz = await LedgisT40VVqe.balanceOf.call(addressrs5or3f, {from: accounts[3]});
	});

	it('test for Ledgis', async () => {
		const LedgistLTUEvs = await Ledgis.new({from: accounts[3]});
		const uintYsbXse = BigInt("542")
		const addressErQBvDF = accounts[6]
		const uinttXgBSaa = BigInt("646")
		const boolpFPjugr = await LedgistLTUEvs.transfer.call(addressErQBvDF, uintYsbXse, {from: accounts[3]});
		const uint256H7lQ1NO = await LedgistLTUEvs.afterTime.call(uinttXgBSaa, {from: accounts[3]});

		assert.equal(boolpFPjugr, true)
		assert.equal(uint256H7lQ1NO, BigInt("1630230458"))
	});

	it('test for Ledgis', async () => {
		const LedgisUxYDuV8 = await Ledgis.new({from: accounts[2]});
		const addressunNUxfp = accounts[1]
		const addressJUeS6Y = accounts[4]
		const uint256tsv5sL = await LedgisUxYDuV8.currentTime.call({from: accounts[0]});
		const uint256Ibh5kEk = await LedgisUxYDuV8.allowance.call(addressJUeS6Y, addressunNUxfp, {from: accounts[1]});
//		await LedgisUxYDuV8.renounceOwnership.call({from: accounts[2]});

		assert.equal(uint256Ibh5kEk, BigInt("0"))
		assert.equal(uint256tsv5sL, BigInt("1630229824"))
		await expect(LedgisUxYDuV8.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisUxYDuV8 = await Ledgis.new({from: accounts[2]});
		const uintcKsi4B1 = BigInt("1491")
		const uintpG2Rjne = BigInt("854")
		const addressomLRsv7 = accounts[2]
		const uintmj1O3VV = BigInt("412")
		const uinten4wgdC = BigInt("1473")
		const addressxfrCWYs = accounts[4]
		const addresssUyO8E2 = accounts[1]
		const boolFE2F2rF = await LedgisUxYDuV8.transferWithLockAfter.call(addressomLRsv7, uintpG2Rjne, uintcKsi4B1, {from: accounts[2]});
//		const boolzhnm8yt = await LedgisUxYDuV8.transferWithLockAfter.call(addressxfrCWYs, uinten4wgdC, uintmj1O3VV, {from: accounts[3]});
//		const uint256GuVj60j = await LedgisUxYDuV8.balanceOf.call(addresssUyO8E2, {from: accounts[0]});

		assert.equal(boolFE2F2rF, true)
		await expect(LedgisUxYDuV8.transferWithLockAfter.call(addressxfrCWYs, uinten4wgdC, uintmj1O3VV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgistLTUEvs = await Ledgis.new({from: accounts[3]});
		const uintEsgFw1A = BigInt("1418")
		const addressW3VnWEH = accounts[4]
		const uintsmHLDpK = BigInt("1059")
		const uintF068dP2 = BigInt("1624")
		const addresslC9tvQL = accounts[5]
		const uintjse4E89 = BigInt("538")
		const addressjKvodh8 = accounts[7]
//		const addressBxRQEat = await LedgistLTUEvs.burn.call(addressW3VnWEH, uintEsgFw1A, {from: accounts[3]});
//		const boolYoN8U7S = await LedgistLTUEvs.transferWithLockAfter.call(addresslC9tvQL, uintF068dP2, uintsmHLDpK, {from: accounts[5]});
//		const boolpFPjugr = await LedgistLTUEvs.transfer.call(addressjKvodh8, uintjse4E89, {from: accounts[3]});

		await expect(LedgistLTUEvs.burn.call(addressW3VnWEH, uintEsgFw1A, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgistLTUEvs = await Ledgis.new({from: accounts[3]});
		const uinth9uRR2U = BigInt("506")
		const addresssSeT3mK = accounts[6]
		const uintrJ16NGo = BigInt("954")
		const addressLlGQWXt = accounts[4]
		const addresskgdki0l = accounts[5]
		const uinttLxkdB5 = BigInt("1295")
		const addressrHWP2xe = accounts[4]
		const boolpFPjugr = await LedgistLTUEvs.transfer.call(addresssSeT3mK, uinth9uRR2U, {from: accounts[3]});
		const boolpYrhG75 = await LedgistLTUEvs.mint.call(addressLlGQWXt, uintrJ16NGo, {from: accounts[3]});
		const uint256vuWJGI5 = await LedgistLTUEvs.balanceOf.call(addresskgdki0l, {from: accounts[5]});
		const boolDvVSqEd = await LedgistLTUEvs.increaseAllowance.call(addressrHWP2xe, uinttLxkdB5, {from: accounts[0]});

		assert.equal(boolDvVSqEd, true)
		assert.equal(boolpFPjugr, true)
		assert.equal(boolpYrhG75, true)
		assert.equal(uint256vuWJGI5, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgistLTUEvs = await Ledgis.new({from: accounts[3]});
		const addressHOGKPR = accounts[2]
		const uintYbp0F2i = BigInt("538")
		const addressWPfvSP4 = accounts[6]
		const addressRLDCWwf = await LedgistLTUEvs.transferOwnership.call(addressHOGKPR, {from: accounts[3]});
		const boolpFPjugr = await LedgistLTUEvs.transfer.call(addressWPfvSP4, uintYbp0F2i, {from: accounts[3]});
//		await LedgistLTUEvs.onlyOwner.call({from: accounts[5]});

		assert.equal(boolpFPjugr, true)
		await expect(LedgistLTUEvs.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgis4mkyRS = await Ledgis.new({from: accounts[4]});
		const uinth7ufBNQ = BigInt("1655")
		const addresstDKi4E3 = accounts[1]
		const uintC6zs5o = BigInt("34")
		const uintVBUjvMd = BigInt("1692")
		const addressgDMU0nZ = accounts[3]
		const uintmxm3tf = BigInt("1901")
		const uintl0OIpDg = BigInt("1169")
		const addressxEyLrRV = accounts[3]
		const uintgFUYUTK = BigInt("978")
		const addressjY4OhNw = accounts[3]
		const uintaV3UbwS = BigInt("1262")
		const uintUcP1FAW = BigInt("901")
		const addressYl3bP8 = accounts[4]
//		const addressA1zvuPE = await Ledgis4mkyRS.unlock.call(addresstDKi4E3, uinth7ufBNQ, {from: accounts[4]});
//		const boolrkyTZMn = await Ledgis4mkyRS.transferWithLock.call(addressgDMU0nZ, uintVBUjvMd, uintC6zs5o, {from: accounts[1]});
//		await Ledgis4mkyRS.renounceOwnership.call({from: accounts[4]});
//		const boolmUKOoNU = await Ledgis4mkyRS.transferWithLockAfter.call(addressxEyLrRV, uintl0OIpDg, uintmxm3tf, {from: accounts[1]});
//		const boolVKyrBP = await Ledgis4mkyRS.approve.call(addressjY4OhNw, uintgFUYUTK, {from: accounts[5]});
//		const boolgmw1BWK = await Ledgis4mkyRS.transferWithLockAfter.call(addressYl3bP8, uintUcP1FAW, uintaV3UbwS, {from: accounts[4]});

		await expect(Ledgis4mkyRS.unlock.call(addresstDKi4E3, uinth7ufBNQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisUxYDuV8 = await Ledgis.new({from: accounts[2]});
		const addressWlN7rIX = accounts[0]
		const addressrTqf9L = accounts[4]
		const uintKUplDtj = BigInt("372")
		const addressbnty0oD = accounts[4]
		const uintaz36fQM = BigInt("810")
		const uintYGhXKRG = BigInt("30")
		const addressxG6CpX8 = accounts[0]
		const addressJoRv7IP = accounts[2]
		const addressW3driAs = await LedgisUxYDuV8.freeze.call(addressWlN7rIX, {from: accounts[2]});
//		const addresse4Gth0F = await LedgisUxYDuV8.transferOwnership.call(addressrTqf9L, {from: accounts[1]});
//		const boolGLykZP = await LedgisUxYDuV8.transfer.call(addressbnty0oD, uintKUplDtj, {from: accounts[2]});
//		const addressIeJR5jS = await LedgisUxYDuV8.lockAfter.call(addressxG6CpX8, uintYGhXKRG, uintaz36fQM, {from: accounts[2]});
//		const uint256GuVj60j = await LedgisUxYDuV8.balanceOf.call(addressJoRv7IP, {from: accounts[0]});

		await expect(LedgisUxYDuV8.transferOwnership.call(addressrTqf9L, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisUxYDuV8 = await Ledgis.new({from: accounts[2]});
		const uintCnYEbEW = BigInt("174")
		const uintDTM9o4 = BigInt("603")
		const addressyCyfGlo = accounts[5]
		const uintKzy6TVT = BigInt("1271")
		const addressjkbpBMT = accounts[2]
		const uint256tsv5sL = await LedgisUxYDuV8.currentTime.call({from: accounts[0]});
//		const address2LfRKM = await LedgisUxYDuV8.lockAfter.call(addressyCyfGlo, uintDTM9o4, uintCnYEbEW, {from: accounts[2]});
//		const addressvLz11aj = await LedgisUxYDuV8.unlock.call(addressjkbpBMT, uintKzy6TVT, {from: accounts[2]});

		assert.equal(uint256tsv5sL, BigInt("1630229803"))
		await expect(LedgisUxYDuV8.lockAfter.call(addressyCyfGlo, uintDTM9o4, uintCnYEbEW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisUxYDuV8 = await Ledgis.new({from: accounts[2]});
		const uintpEXxe56 = BigInt("753")
		const addressMT8h6nO = accounts[0]
		const addressffAxu3s = "0x0000000000000000000000000000000000000001"
		const addressTUc1cxb = accounts[2]
//		await LedgisUxYDuV8.unpause.call({from: accounts[2]});
//		const boolywxdWqd = await LedgisUxYDuV8.transferFrom.call(addressffAxu3s, addressMT8h6nO, uintpEXxe56, {from: accounts[1]});
//		const uint256GuVj60j = await LedgisUxYDuV8.balanceOf.call(addressTUc1cxb, {from: accounts[0]});

		await expect(LedgisUxYDuV8.unpause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgistLTUEvs = await Ledgis.new({from: accounts[3]});
		const uintRBA46Pt = BigInt("538")
		const addressdQvMItH = accounts[6]
		const addresstIlrVC = accounts[3]
		const boolpFPjugr = await LedgistLTUEvs.transfer.call(addressdQvMItH, uintRBA46Pt, {from: accounts[3]});
//		await LedgistLTUEvs.pause.call({from: accounts[3]});
//		const boolkFWMGzn = await LedgistLTUEvs.isFrozen.call(addresstIlrVC, {from: accounts[5]});
//		await LedgistLTUEvs.unpause.call({from: accounts[4]});

		assert.equal(boolpFPjugr, true)
		await expect(LedgistLTUEvs.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})