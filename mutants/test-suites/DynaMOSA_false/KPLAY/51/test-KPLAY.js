const KPLAY = artifacts.require("KPLAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('KPLAY', (accounts) => {
	it('test for KPLAY', async () => {
		const KPLAYiqkTCx7 = await KPLAY.new({from: accounts[3]});
		const addressxLieK6H = accounts[0]
		const addresstMEcZUX = accounts[4]
		const uintb7ejEPM = BigInt("1042")
		const addressTNHTked = accounts[3]
		const addressMxVnjGv = accounts[2]
		const uintBaGajU = BigInt("536")
		const address8Kkl3q = accounts[4]
		const uint256tRrVzgy = await KPLAYiqkTCx7.allowance.call(addresstMEcZUX, addressxLieK6H, {from: accounts[3]});
//		const boolpbArunl = await KPLAYiqkTCx7.mint.call(addressTNHTked, uintb7ejEPM, {from: "0x0000000000000000000000000000000000000001"});
//		await KPLAYiqkTCx7.unpause.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolbJqrdML = await KPLAYiqkTCx7.isFrozen.call(addressMxVnjGv, {from: accounts[3]});
//		const boolS4TMzYH = await KPLAYiqkTCx7.increaseAllowance.call(address8Kkl3q, uintBaGajU, {from: accounts[2]});
//		await KPLAYiqkTCx7.whenNotPaused.call({from: accounts[4]});

		assert.equal(uint256tRrVzgy, BigInt("0"))
		await expect(KPLAYiqkTCx7.mint.call(addressTNHTked, uintb7ejEPM, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYx362JDF = await KPLAY.new({from: accounts[0]});
		const uintUKXvjzV = BigInt("1507")
		const addressZqLq1kE = accounts[4]
		const addressprQQrNd = accounts[1]
		const uintrsHABut = BigInt("658")
		const addressw7AIUZQ = accounts[0]
//		const boolD3nWH2s = await KPLAYx362JDF.transferFrom.call(addressprQQrNd, addressZqLq1kE, uintUKXvjzV, {from: accounts[1]});
//		const address1OHg24 = await KPLAYx362JDF.unlock.call(addressw7AIUZQ, uintrsHABut, {from: accounts[2]});
//		await KPLAYx362JDF.onlyOwner.call({from: accounts[4]});

		await expect(KPLAYx362JDF.transferFrom.call(addressprQQrNd, addressZqLq1kE, uintUKXvjzV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYt5VJiDe = await KPLAY.new({from: accounts[3]});
		const addressn3zI1yb = "0x0000000000000000000000000000000000000001"
		const uint256mzGFbWJ = await KPLAYt5VJiDe.balanceOf.call(addressn3zI1yb, {from: accounts[1]});
//		await KPLAYt5VJiDe.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256Dbh9bbI = await KPLAYt5VJiDe.totalSupply.call({from: accounts[2]});
//		await KPLAYt5VJiDe.onlyOwner.call({from: accounts[1]});

		assert.equal(uint256mzGFbWJ, BigInt("0"))
		await expect(KPLAYt5VJiDe.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYou7pHrE = await KPLAY.new({from: accounts[2]});
		const addresszL6ZV4L = accounts[3]
		const addressMDdIA0S = accounts[4]
		const uintOyrvf3P = BigInt("1477")
		const addressuwoVkPy = accounts[4]
		const addressMYp3caO = accounts[4]
//		await KPLAYou7pHrE.renounceOwnership.call({from: accounts[2]});
//		const uint256nnBVOV = await KPLAYou7pHrE.balanceOf.call(addresszL6ZV4L, {from: accounts[0]});
//		const boolElbjtT = await KPLAYou7pHrE.isFrozen.call(addressMDdIA0S, {from: accounts[2]});
//		const boolUWpehka = await KPLAYou7pHrE.transferFrom.call(addressMYp3caO, addressuwoVkPy, uintOyrvf3P, {from: accounts[0]});

		await expect(KPLAYou7pHrE.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwIksy43 = await KPLAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uintjv6Fjcr = BigInt("1441")
		const addressSmir3L = accounts[0]
		const uinteCw8sgW = BigInt("550")
		const uintFAmYZSP = BigInt("233")
		const addresscRrEJYB = accounts[4]
		const uintP7AZpAL = BigInt("1450")
		const addressaKzux4v = accounts[4]
		const addressvIldUls = accounts[0]
		await KPLAYwIksy43.whenNotFrozen.call({from: accounts[1]});
		const boolNzrhjvB = await KPLAYwIksy43.mint.call(addressSmir3L, uintjv6Fjcr, {from: accounts[1]});
		const boolSWKgauG = await KPLAYwIksy43.transferWithLockAfter.call(addresscRrEJYB, uintFAmYZSP, uinteCw8sgW, {from: accounts[2]});
		const boolLi1PK46 = await KPLAYwIksy43.transferFrom.call(addressvIldUls, addressaKzux4v, uintP7AZpAL, {from: accounts[0]});
	});

	it('test for KPLAY', async () => {
		const KPLAYQPrhyKo = await KPLAY.new({from: accounts[3]});
		const uintbT8JWFF = BigInt("1625")
		const uintvZ93l69 = BigInt("1429")
		const addressQH0vWv3 = "0x0000000000000000000000000000000000000001"
		const uint256ESk56SD = await KPLAYQPrhyKo.totalSupply.call({from: accounts[3]});
		const uint256oPSuxMV = await KPLAYQPrhyKo.afterTime.call(uintbT8JWFF, {from: accounts[3]});
		const boolIZl4DWY = await KPLAYQPrhyKo.transfer.call(addressQH0vWv3, uintvZ93l69, {from: accounts[3]});
//		await KPLAYQPrhyKo.renounceOwnership.call({from: accounts[3]});
//		await KPLAYQPrhyKo.whenPaused.call({from: accounts[2]});

		assert.equal(boolIZl4DWY, true)
		assert.equal(uint256ESk56SD, BigInt("10000000000000000"))
		assert.equal(uint256oPSuxMV, BigInt("1630227687"))
		await expect(KPLAYQPrhyKo.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYODQX2HD = await KPLAY.new({from: accounts[1]});
		const uintXRo3mUd = BigInt("560")
		const addressVBZYWem = accounts[3]
		const uintQPyviHT = BigInt("2013")
		const addressxR1pvLo = accounts[5]
		const uintk7h3qY4 = BigInt("833")
		const uintwqVymwj = BigInt("1852")
		const addressjrJRMKM = "0x0000000000000000000000000000000000000001"
		const boolzmCxAnW = await KPLAYODQX2HD.increaseAllowance.call(addressVBZYWem, uintXRo3mUd, {from: accounts[1]});
//		const addressatlmEJ = await KPLAYODQX2HD.burn.call(addressxR1pvLo, uintQPyviHT, {from: accounts[0]});
//		const addresse3GsPK = await KPLAYODQX2HD.lockAfter.call(addressjrJRMKM, uintwqVymwj, uintk7h3qY4, {from: accounts[4]});
//		await KPLAYODQX2HD.whenNotPaused.call({from: accounts[4]});

		assert.equal(boolzmCxAnW, true)
		await expect(KPLAYODQX2HD.burn.call(addressxR1pvLo, uintQPyviHT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYQPrhyKo = await KPLAY.new({from: accounts[3]});
		const uintxpUOzF8 = BigInt("1625")
		const uintDEuZfZc = BigInt("1429")
		const addressEbGEwt7 = "0x0000000000000000000000000000000000000001"
		const uint256ESk56SD = await KPLAYQPrhyKo.totalSupply.call({from: accounts[3]});
		const uint256oPSuxMV = await KPLAYQPrhyKo.afterTime.call(uintxpUOzF8, {from: accounts[3]});
		const uint256OqUr2Nh = await KPLAYQPrhyKo.currentTime.call({from: accounts[4]});
		const boolIZl4DWY = await KPLAYQPrhyKo.transfer.call(addressEbGEwt7, uintDEuZfZc, {from: accounts[3]});
//		await KPLAYQPrhyKo.renounceOwnership.call({from: accounts[3]});
//		await KPLAYQPrhyKo.whenPaused.call({from: accounts[2]});

		assert.equal(boolIZl4DWY, true)
		assert.equal(uint256ESk56SD, BigInt("10000000000000000"))
		assert.equal(uint256OqUr2Nh, BigInt("1630226081"))
		assert.equal(uint256oPSuxMV, BigInt("1630227706"))
		await expect(KPLAYQPrhyKo.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYbtTwEpV = await KPLAY.new({from: accounts[4]});
		const addressQhUJsjF = accounts[3]
		const addressRp5zl7J = accounts[5]
		const addressmpioenl = accounts[2]
		const addressgnuzcVQ = accounts[2]
		const uint256kq7vA6 = await KPLAYbtTwEpV.balanceOf.call(addressQhUJsjF, {from: accounts[2]});
		const uint256qlVxrE5 = await KPLAYbtTwEpV.lockCount.call(addressRp5zl7J, {from: accounts[4]});
		const uint256sqqS2jg = await KPLAYbtTwEpV.allowance.call(addressgnuzcVQ, addressmpioenl, {from: accounts[4]});
		const uint256T5G6UZK = await KPLAYbtTwEpV.currentTime.call({from: accounts[3]});

		assert.equal(uint256T5G6UZK, BigInt("1630226051"))
		assert.equal(uint256kq7vA6, BigInt("0"))
		assert.equal(uint256qlVxrE5, BigInt("0"))
		assert.equal(uint256sqqS2jg, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYt5VJiDe = await KPLAY.new({from: accounts[3]});
		const uintLdmPUr5 = BigInt("424")
		const addresso0JdCK = accounts[2]
		const addressOXUM2ua = "0x0000000000000000000000000000000000000000"
//		await KPLAYt5VJiDe.lockState.call(addresso0JdCK, uintLdmPUr5, {from: accounts[5]});
//		const uint256mzGFbWJ = await KPLAYt5VJiDe.balanceOf.call(addressOXUM2ua, {from: accounts[1]});
//		await KPLAYt5VJiDe.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256Dbh9bbI = await KPLAYt5VJiDe.totalSupply.call({from: accounts[2]});
//		const uint256cTJ6kCl = await KPLAYt5VJiDe.totalSupply.call({from: accounts[4]});
//		await KPLAYt5VJiDe.onlyOwner.call({from: accounts[1]});

		await expect(KPLAYt5VJiDe.lockState.call(addresso0JdCK, uintLdmPUr5, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYFWL7drE = await KPLAY.new({from: accounts[1]});
		const uintByiZZ75 = BigInt("861")
		const addressLrt9Fen = accounts[4]
		const addressaiZdWbq = accounts[0]
		const boolf0QY2n7 = await KPLAYFWL7drE.approve.call(addressLrt9Fen, uintByiZZ75, {from: accounts[3]});
//		await KPLAYFWL7drE.unpause.call({from: accounts[3]});
//		const boolG3i7Yhh = await KPLAYFWL7drE.isFrozen.call(addressaiZdWbq, {from: accounts[1]});

		assert.equal(boolf0QY2n7, true)
		await expect(KPLAYFWL7drE.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYbtTwEpV = await KPLAY.new({from: accounts[4]});
		const addressR66YbvC = accounts[2]
		const addressTqv6CX1 = accounts[0]
		const addressZqhdqs5 = accounts[3]
		const addressu0lnOBv = accounts[5]
		const addressHMuZh5k = accounts[1]
		const addressBpFkx14 = accounts[3]
		const addresseJjExJP = accounts[3]
		const uint256TZAoN1 = await KPLAYbtTwEpV.lockCount.call(addressR66YbvC, {from: accounts[1]});
		const addressKwmKec = await KPLAYbtTwEpV.freeze.call(addressTqv6CX1, {from: accounts[4]});
		const uint256kq7vA6 = await KPLAYbtTwEpV.balanceOf.call(addressZqhdqs5, {from: accounts[2]});
		const uint256qlVxrE5 = await KPLAYbtTwEpV.lockCount.call(addressu0lnOBv, {from: accounts[4]});
//		const addresshnWvfMg = await KPLAYbtTwEpV.transferOwnership.call(addressHMuZh5k, {from: accounts[2]});
//		const uint256sqqS2jg = await KPLAYbtTwEpV.allowance.call(addresseJjExJP, addressBpFkx14, {from: accounts[4]});

		assert.equal(uint256TZAoN1, BigInt("0"))
		assert.equal(uint256kq7vA6, BigInt("0"))
		assert.equal(uint256qlVxrE5, BigInt("0"))
		await expect(KPLAYbtTwEpV.transferOwnership.call(addressHMuZh5k, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYou7pHrE = await KPLAY.new({from: accounts[2]});
		const uintgdx3KpU = BigInt("1717")
		const addresscYzTLLv = accounts[0]
		const addressfelhVD1 = accounts[4]
		const addressD7HbgE = accounts[4]
		const uintvnKGKJg = BigInt("1477")
		const addressMCSyPdM = accounts[4]
		const addressz2KPeFs = accounts[4]
//		await KPLAYou7pHrE.renounceOwnership.call({from: accounts[2]});
//		const boolLBdhQ5l = await KPLAYou7pHrE.decreaseAllowance.call(addresscYzTLLv, uintgdx3KpU, {from: accounts[0]});
//		const uint256nnBVOV = await KPLAYou7pHrE.balanceOf.call(addressfelhVD1, {from: accounts[0]});
//		const boolElbjtT = await KPLAYou7pHrE.isFrozen.call(addressD7HbgE, {from: accounts[2]});
//		const boolUWpehka = await KPLAYou7pHrE.transferFrom.call(addressz2KPeFs, addressMCSyPdM, uintvnKGKJg, {from: accounts[0]});

		await expect(KPLAYou7pHrE.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYt5VJiDe = await KPLAY.new({from: accounts[3]});
		const uintgL61dTG = BigInt("1013")
		const addresskUFwI0K = accounts[5]
		const addressyzE6nKC = "0x0000000000000000000000000000000000000001"
		const uinttWY9f7k = BigInt("172")
		const addresscW9poSy = accounts[1]
		const addressCMlmaLC = accounts[3]
//		const addressulZILTp = await KPLAYt5VJiDe.unlock.call(addresskUFwI0K, uintgL61dTG, {from: accounts[3]});
//		const uint256mzGFbWJ = await KPLAYt5VJiDe.balanceOf.call(addressyzE6nKC, {from: accounts[1]});
//		await KPLAYt5VJiDe.lockState.call(addresscW9poSy, uinttWY9f7k, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256OhHaRJ7 = await KPLAYt5VJiDe.lockCount.call(addressCMlmaLC, {from: accounts[1]});
//		await KPLAYt5VJiDe.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256Dbh9bbI = await KPLAYt5VJiDe.totalSupply.call({from: accounts[2]});
//		await KPLAYt5VJiDe.onlyOwner.call({from: accounts[1]});

		await expect(KPLAYt5VJiDe.unlock.call(addresskUFwI0K, uintgL61dTG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYou7pHrE = await KPLAY.new({from: accounts[2]});
		const addresso9YWmvs = accounts[3]
		const addresswHzAmb = accounts[4]
		const addressjr32icj = accounts[2]
		const uintjFrJkKv = BigInt("1477")
		const addressGL04dV5 = accounts[4]
		const addressl7VSdZ = accounts[4]
//		await KPLAYou7pHrE.renounceOwnership.call({from: accounts[2]});
//		const uint256nnBVOV = await KPLAYou7pHrE.balanceOf.call(addresso9YWmvs, {from: accounts[0]});
//		const boolElbjtT = await KPLAYou7pHrE.isFrozen.call(addresswHzAmb, {from: accounts[2]});
//		const addressaDgLGa7 = await KPLAYou7pHrE.unfreeze.call(addressjr32icj, {from: accounts[2]});
//		const boolUWpehka = await KPLAYou7pHrE.transferFrom.call(addressl7VSdZ, addressGL04dV5, uintjFrJkKv, {from: accounts[0]});

		await expect(KPLAYou7pHrE.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYt5VJiDe = await KPLAY.new({from: accounts[3]});
		const addressvG4i1bz = "0x0000000000000000000000000000000000000001"
		const uintHItdbMx = BigInt("669")
		const uintWhsYqHT = BigInt("1904")
		const addressKZws3f6 = "0x0000000000000000000000000000000000000001"
		const uint256mzGFbWJ = await KPLAYt5VJiDe.balanceOf.call(addressvG4i1bz, {from: accounts[1]});
		const boolkMZYCUN = await KPLAYt5VJiDe.transferWithLock.call(addressKZws3f6, uintWhsYqHT, uintHItdbMx, {from: accounts[3]});

		assert.equal(boolkMZYCUN, true)
		assert.equal(uint256mzGFbWJ, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYxa8lxeB = await KPLAY.new({from: accounts[3]});
		const uintofyPhKn = BigInt("1887")
		const addressWox5oKi = accounts[2]
		const addressrX65HC4 = accounts[1]
		const address65jse7 = accounts[0]
//		await KPLAYxa8lxeB.unpause.call({from: accounts[3]});
//		await KPLAYxa8lxeB.renounceOwnership.call({from: accounts[3]});
//		await KPLAYxa8lxeB.pause.call({from: accounts[1]});
//		const address3X4inh = await KPLAYxa8lxeB.unlock.call(addressWox5oKi, uintofyPhKn, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256IBlUjYx = await KPLAYxa8lxeB.allowance.call(address65jse7, addressrX65HC4, {from: accounts[3]});

		await expect(KPLAYxa8lxeB.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYou7pHrE = await KPLAY.new({from: accounts[2]});
		const addressFi5lVBv = accounts[3]
		const uintvEN3CV7 = BigInt("873")
		const uinttQeZUB = BigInt("1108")
		const addressr0kGC2H = accounts[4]
		const addressVL8S8qU = accounts[4]
		const uintvtih9oV = BigInt("1477")
		const addressTnI1Z18 = accounts[4]
		const addressRB9HNzb = accounts[5]
//		await KPLAYou7pHrE.renounceOwnership.call({from: accounts[2]});
//		const uint256nnBVOV = await KPLAYou7pHrE.balanceOf.call(addressFi5lVBv, {from: accounts[0]});
//		const addressnTwvpkJ = await KPLAYou7pHrE.lock.call(addressr0kGC2H, uinttQeZUB, uintvEN3CV7, {from: accounts[2]});
//		const boolElbjtT = await KPLAYou7pHrE.isFrozen.call(addressVL8S8qU, {from: accounts[2]});
//		const boolUWpehka = await KPLAYou7pHrE.transferFrom.call(addressRB9HNzb, addressTnI1Z18, uintvtih9oV, {from: accounts[0]});

		await expect(KPLAYou7pHrE.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYRNOg0xL = await KPLAY.new({from: accounts[3]});
		const addressbhL3NMx = accounts[1]
		const uintpWdHQK2 = BigInt("1202")
		const addressQVH1KZI = accounts[2]
		const uintIXCyNbQ = BigInt("1299")
		const addressUZ1DxDZ = accounts[0]
		const uintY681DWn = BigInt("199")
		const addresss62O9hM = accounts[4]
		const addressrGnMkXn = accounts[2]
		const uint256YncQkpj = await KPLAYRNOg0xL.balanceOf.call(addressbhL3NMx, {from: accounts[5]});
		const boolpS54fVU = await KPLAYRNOg0xL.mint.call(addressQVH1KZI, uintpWdHQK2, {from: accounts[3]});
		const uint256AwYuuR3 = await KPLAYRNOg0xL.currentTime.call({from: accounts[1]});
//		await KPLAYRNOg0xL.renounceOwnership.call({from: accounts[3]});
//		const boolZvwV4N = await KPLAYRNOg0xL.transfer.call(addressUZ1DxDZ, uintIXCyNbQ, {from: accounts[0]});
//		const boolhs4EKUF = await KPLAYRNOg0xL.transfer.call(addresss62O9hM, uintY681DWn, {from: accounts[0]});
//		const boolVRmZWt = await KPLAYRNOg0xL.isFrozen.call(addressrGnMkXn, {from: accounts[4]});

		assert.equal(boolpS54fVU, true)
		assert.equal(uint256AwYuuR3, BigInt("1630226035"))
		assert.equal(uint256YncQkpj, BigInt("0"))
		await expect(KPLAYRNOg0xL.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYt5VJiDe = await KPLAY.new({from: accounts[3]});
		const addressvWMEIMs = "0x0000000000000000000000000000000000000000"
		const uintoJJdKPK = BigInt("805")
		const uintHsKb7jm = BigInt("552")
		const addressB1ttBRF = "0x0000000000000000000000000000000000000001"
		const uint256mzGFbWJ = await KPLAYt5VJiDe.balanceOf.call(addressvWMEIMs, {from: accounts[1]});
		const booluesvIQY = await KPLAYt5VJiDe.transferWithLockAfter.call(addressB1ttBRF, uintHsKb7jm, uintoJJdKPK, {from: accounts[3]});

		assert.equal(booluesvIQY, true)
		assert.equal(uint256mzGFbWJ, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYt5VJiDe = await KPLAY.new({from: accounts[3]});
		const addressrjSNNXX = "0x0000000000000000000000000000000000000002"
		const uintRzlP0h = BigInt("18")
		const addressqFG5ecs = "0x0000000000000000000000000000000000000000"
		const addressqzP5AYI = accounts[3]
		const uintFpJ3n3P = BigInt("1559")
		const addressWkp1cHJ = accounts[5]
		const uinttJuNyW1 = BigInt("1077")
		const uinto2HB32l = BigInt("1927")
		const addresstm6oyGH = accounts[1]
		const uint256mzGFbWJ = await KPLAYt5VJiDe.balanceOf.call(addressrjSNNXX, {from: accounts[1]});
//		const boolkWvCCbi = await KPLAYt5VJiDe.transferFrom.call(addressqzP5AYI, addressqFG5ecs, uintRzlP0h, {from: "0x0000000000000000000000000000000000000001"});
//		const boolimETG3W = await KPLAYt5VJiDe.increaseAllowance.call(addressWkp1cHJ, uintFpJ3n3P, {from: accounts[1]});
//		const addressDQVfbDc = await KPLAYt5VJiDe.lock.call(addresstm6oyGH, uinto2HB32l, uinttJuNyW1, {from: accounts[1]});

		assert.equal(uint256mzGFbWJ, BigInt("0"))
		await expect(KPLAYt5VJiDe.transferFrom.call(addressqzP5AYI, addressqFG5ecs, uintRzlP0h, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYt5VJiDe = await KPLAY.new({from: accounts[3]});
		const uinttgNX4WM = BigInt("1664")
		const addressvJDgGO9 = accounts[2]
		const uintrVkDDLx = BigInt("1013")
		const addressuJiXxbP = accounts[5]
		const addressO8q4m3 = accounts[3]
//		const addressa0Wy7L = await KPLAYt5VJiDe.burn.call(addressvJDgGO9, uinttgNX4WM, {from: accounts[3]});
//		const addressulZILTp = await KPLAYt5VJiDe.unlock.call(addressuJiXxbP, uintrVkDDLx, {from: accounts[3]});
//		await KPLAYt5VJiDe.whenPaused.call({from: accounts[1]});
//		const uint256OhHaRJ7 = await KPLAYt5VJiDe.lockCount.call(addressO8q4m3, {from: accounts[1]});
//		await KPLAYt5VJiDe.onlyOwner.call({from: accounts[1]});

		await expect(KPLAYt5VJiDe.burn.call(addressvJDgGO9, uinttgNX4WM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYx362JDF = await KPLAY.new({from: accounts[0]});
		const addresshjVH0Yr = "0x0000000000000000000000000000000000000001"
		const uintLfe2wPk = BigInt("634")
		const addressYkNnTv = "0x0000000000000000000000000000000000000001"
		const uintpAUOrnY = BigInt("1542")
		const addresskK8cFZ = accounts[5]
		const addressCqtSX6y = accounts[1]
		const addressH7M1mV = await KPLAYx362JDF.transferOwnership.call(addresshjVH0Yr, {from: accounts[0]});
//		const addresswRPXf8l = await KPLAYx362JDF.burn.call(addressYkNnTv, uintLfe2wPk, {from: accounts[1]});
//		const boolD3nWH2s = await KPLAYx362JDF.transferFrom.call(addressCqtSX6y, addresskK8cFZ, uintpAUOrnY, {from: accounts[1]});

		await expect(KPLAYx362JDF.burn.call(addressYkNnTv, uintLfe2wPk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYt5VJiDe = await KPLAY.new({from: accounts[3]});
		const uintdHn7M95 = BigInt("294")
		const addressAR8mUpg = accounts[3]
		const addresslFLYIzn = accounts[0]
		const addressh0msil5 = "0x0000000000000000000000000000000000000001"
		const addressn83GI72 = await KPLAYt5VJiDe.burn.call(addressAR8mUpg, uintdHn7M95, {from: accounts[3]});
//		const addressUx00FAS = await KPLAYt5VJiDe.freeze.call(addresslFLYIzn, {from: accounts[4]});
//		const uint256mzGFbWJ = await KPLAYt5VJiDe.balanceOf.call(addressh0msil5, {from: accounts[1]});

		await expect(KPLAYt5VJiDe.freeze.call(addresslFLYIzn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYnIh1K5m = await KPLAY.new({from: accounts[4]});
		const uintZwwbIP8 = BigInt("205")
		const uintzT4CYYk = BigInt("922")
		const addressZ1bMnqZ = accounts[2]
		const uintZPbfQDn = BigInt("1805")
		const addresseyyIuZI = accounts[0]
		const addressnE0TqP = accounts[1]
//		const addressFFLXBIC = await KPLAYnIh1K5m.lockAfter.call(addressZ1bMnqZ, uintzT4CYYk, uintZwwbIP8, {from: accounts[4]});
//		const uint256yL0RG4z = await KPLAYnIh1K5m.currentTime.call({from: accounts[4]});
//		const boolW0Sa16 = await KPLAYnIh1K5m.mint.call(addresseyyIuZI, uintZPbfQDn, {from: accounts[4]});
//		const uint256p4Ux4ij = await KPLAYnIh1K5m.balanceOf.call(addressnE0TqP, {from: accounts[0]});

		await expect(KPLAYnIh1K5m.lockAfter.call(addressZ1bMnqZ, uintzT4CYYk, uintZwwbIP8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYx362JDF = await KPLAY.new({from: accounts[0]});
		const uintswzCXsV = BigInt("1247")
		const addressZx81GmY = accounts[2]
		const uintsiSYxPY = BigInt("1085")
		const addresszk7gGZy = accounts[4]
		const uintbqMahW = BigInt("1489")
		const addressyLJrgeR = accounts[5]
		const addressBAUq99W = accounts[1]
		const booli3oRZWt = await KPLAYx362JDF.approve.call(addressZx81GmY, uintswzCXsV, {from: accounts[4]});
//		await KPLAYx362JDF.pause.call({from: accounts[0]});
//		await KPLAYx362JDF.lockState.call(addresszk7gGZy, uintsiSYxPY, {from: accounts[4]});
//		const boolD3nWH2s = await KPLAYx362JDF.transferFrom.call(addressBAUq99W, addressyLJrgeR, uintbqMahW, {from: accounts[1]});

		assert.equal(booli3oRZWt, true)
		await expect(KPLAYx362JDF.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})