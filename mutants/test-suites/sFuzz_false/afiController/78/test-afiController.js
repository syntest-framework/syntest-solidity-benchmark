const afiController = artifacts.require("afiController");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('afiController', (accounts) => {
	it('test for afiController', async () => {
		const addressFLCJ4Un = "0x0000000000000000000000000000000000000001"
		const afiControllerdq9fFKw = await afiController.new(addressFLCJ4Un, {from: accounts[0]});
		const addresslfk7aX = accounts[5]
		const addressv2u8pQA = "0x0000000000000000000000000000000000000001"
		const addressvPsghr3 = accounts[4]
		const addressu6mZyFk = accounts[0]
		const uintXvNC88X = BigInt("410")
		const addressoArcE2 = accounts[1]
		const addresstxxpWwM = "0x0000000000000000000000000000000000000001"
//		const addressBh47zBt = await afiControllerdq9fFKw.setOneSplit.call(addresslfk7aX, {from: accounts[3]});
//		const uintC1YZlAq = await afiControllerdq9fFKw.balanceOf.call(addressv2u8pQA, {from: accounts[1]});
//		const addressaQyrEw1 = await afiControllerdq9fFKw.setStrategy.call(addressu6mZyFk, addressvPsghr3, {from: accounts[4]});
//		const addressCzZ4sJ = await afiControllerdq9fFKw.yearn.call(addresstxxpWwM, addressoArcE2, uintXvNC88X, {from: accounts[5]});

		await expect(afiControllerdq9fFKw.setOneSplit.call(addresslfk7aX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressvTyJ26u = "0x0000000000000000000000000000000000000001"
		const afiControllernEtApin = await afiController.new(addressvTyJ26u, {from: accounts[3]});
		const addressZ3HZPXx = accounts[3]
		const addressiVcM1GB = accounts[4]
		const addressLouU2Xk = accounts[3]
		const addresst7l4un = accounts[4]
		const addressoP4RBvP = accounts[4]
		const addressAHHkpQh = await afiControllernEtApin.approveStrategy.call(addressiVcM1GB, addressZ3HZPXx, {from: accounts[3]});
		const addressUDD6e1E = await afiControllernEtApin.setConverter.call(addressoP4RBvP, addresst7l4un, addressLouU2Xk, {from: accounts[3]});
	});

	it('test for afiController', async () => {
		const addressTRYeGjy = accounts[3]
		const afiControllerSxsjBsC = await afiController.new(addressTRYeGjy, {from: accounts[3]});
		const addressepptlAq = "0x0000000000000000000000000000000000000001"
		const addresshawnEl = accounts[3]
		const uinteJvu95D = BigInt("556")
		const addressMilZ6Iz = accounts[2]
		const addressTf4ybQ = accounts[3]
		const uintM7oOsuj = BigInt("1628")
		const addressmyKGhqf = accounts[2]
		const addressMAA83Dn = accounts[2]
		const addresswZqozLz = accounts[5]
		const uintNkmerbC = BigInt("2028")
		const addresse6dcjD = "0x0000000000000000000000000000000000000001"
//		const addressfjMAfaY = await afiControllerSxsjBsC.revokeStrategy.call(addresshawnEl, addressepptlAq, {from: "0x0000000000000000000000000000000000000001"});
//		const uintXZtH1TY = await afiControllerSxsjBsC.setSplit.call(uinteJvu95D, {from: accounts[4]});
//		const addressiM2U3Ro = await afiControllerSxsjBsC.revokeStrategy.call(addressTf4ybQ, addressMilZ6Iz, {from: "0x0000000000000000000000000000000000000001"});
//		const uintM7Lehr = await afiControllerSxsjBsC.getExpectedReturn.call(addressMAA83Dn, addressmyKGhqf, uintM7oOsuj, {from: "0x0000000000000000000000000000000000000001"});
//		const addressj5xT6k4 = await afiControllerSxsjBsC.setGovernance.call(addresswZqozLz, {from: "0x0000000000000000000000000000000000000001"});
//		const addressPawujVS = await afiControllerSxsjBsC.withdraw.call(addresse6dcjD, uintNkmerbC, {from: accounts[2]});

		await expect(afiControllerSxsjBsC.revokeStrategy.call(addresshawnEl, addressepptlAq, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressxC23zs = accounts[1]
		const afiControllerYEwpgsX = await afiController.new(addressxC23zs, {from: accounts[3]});
		const addressotLW2Z = accounts[0]
		const addresssW3LQDs = accounts[2]
		const uintiV0lGG5 = BigInt("1024")
		const addresstQ8C5y = accounts[2]
		const addresspdx9ljk = accounts[4]
//		const addressnkAdM5g = await afiControllerYEwpgsX.setStrategist.call(addressotLW2Z, {from: accounts[1]});
//		const uintactPC68 = await afiControllerYEwpgsX.balanceOf.call(addresssW3LQDs, {from: accounts[3]});
//		const addressZHIZabN = await afiControllerYEwpgsX.inCaseTokensGetStuck.call(addresstQ8C5y, uintiV0lGG5, {from: accounts[1]});
//		const addressnpJbpQl = await afiControllerYEwpgsX.setStrategist.call(addresspdx9ljk, {from: accounts[0]});

		await expect(afiControllerYEwpgsX.setStrategist.call(addressotLW2Z, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresscEvYx6B = accounts[1]
		const afiControllerF7GOTlt = await afiController.new(addresscEvYx6B, {from: accounts[2]});
		const uintbsyxtN = BigInt("888")
		const addressdQC5BHr = accounts[0]
		const uintY7GIKj = BigInt("1748")
		const addressW6uV4SI = accounts[0]
		const addressFJwmBJI = accounts[2]
		const addressE0gDPrQ = accounts[4]
		const addressLMTuzZ = accounts[1]
		const addressvUvslMu = "0x0000000000000000000000000000000000000001"
		const addressfJAs5JS = accounts[2]
//		const addressBgXQhg = await afiControllerF7GOTlt.earn.call(addressdQC5BHr, uintbsyxtN, {from: accounts[4]});
//		const addressZjRC2Kw = await afiControllerF7GOTlt.earn.call(addressW6uV4SI, uintY7GIKj, {from: accounts[1]});
//		const addressZh6P8bW = await afiControllerF7GOTlt.setOneSplit.call(addressFJwmBJI, {from: "0x0000000000000000000000000000000000000001"});
//		const addressgkEZjD = await afiControllerF7GOTlt.approveStrategy.call(addressLMTuzZ, addressE0gDPrQ, {from: accounts[5]});
//		const address4rmk5m = await afiControllerF7GOTlt.withdrawAll.call(addressvUvslMu, {from: "0x0000000000000000000000000000000000000001"});
//		const addressOZw1rR2 = await afiControllerF7GOTlt.setStrategist.call(addressfJAs5JS, {from: accounts[4]});

		await expect(afiControllerF7GOTlt.earn.call(addressdQC5BHr, uintbsyxtN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresss13augz = accounts[4]
		const afiControllerSt0RdAE = await afiController.new(addresss13augz, {from: "0x0000000000000000000000000000000000000001"});
		const uintavYzUp4 = BigInt("741")
		const addressrTLuh4H = accounts[4]
		const addressFPSg5vJ = "0x0000000000000000000000000000000000000001"
		const addressMgJAXf9 = accounts[3]
		const addressGnsgzRM = await afiControllerSt0RdAE.inCaseTokensGetStuck.call(addressrTLuh4H, uintavYzUp4, {from: accounts[2]});
		const addressVJZVWv4 = await afiControllerSt0RdAE.setStrategist.call(addressFPSg5vJ, {from: accounts[3]});
		const addressoYKB481 = await afiControllerSt0RdAE.setGovernance.call(addressMgJAXf9, {from: accounts[1]});
	});

	it('test for afiController', async () => {
		const addressLmh9hpT = accounts[2]
		const afiControllerO4lBMgL = await afiController.new(addressLmh9hpT, {from: accounts[4]});
		const address7Fqnv4 = accounts[4]
		const addresscCb6O7V = accounts[3]
		const addressVxkNBKX = accounts[5]
		const addressV6ujxGO = accounts[2]
//		const addressYmGzRCo = await afiControllerO4lBMgL.withdrawAll.call(address7Fqnv4, {from: accounts[0]});
//		const addressCnBJZjn = await afiControllerO4lBMgL.setConverter.call(addressV6ujxGO, addressVxkNBKX, addresscCb6O7V, {from: accounts[1]});

		await expect(afiControllerO4lBMgL.withdrawAll.call(address7Fqnv4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresshaml9DA = accounts[4]
		const afiControllerTYNttQo = await afiController.new(addresshaml9DA, {from: accounts[1]});
		const addressJ1Kq1pf = "0x0000000000000000000000000000000000000001"
		const addresswciu68I = "0x0000000000000000000000000000000000000001"
		const addressJ1PBnvc = accounts[4]
		const addressucSeoPv = accounts[3]
		const addressmQ0M8HY = accounts[3]
//		const addressDLrRrku = await afiControllerTYNttQo.setStrategy.call(addresswciu68I, addressJ1Kq1pf, {from: accounts[5]});
//		const uintOAUYZfZ = await afiControllerTYNttQo.balanceOf.call(addressJ1PBnvc, {from: accounts[4]});
//		const addressKfOz62o = await afiControllerTYNttQo.setVault.call(addressmQ0M8HY, addressucSeoPv, {from: accounts[0]});

		await expect(afiControllerTYNttQo.setStrategy.call(addresswciu68I, addressJ1Kq1pf, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressXSTNdcZ = "0x0000000000000000000000000000000000000001"
		const afiControllernEtApin = await afiController.new(addressXSTNdcZ, {from: accounts[3]});
		const addressE7fjjL5 = accounts[2]
		const addresst2FGgO = accounts[4]
		const addressmo6tik = accounts[3]
		const addressWs3g4VD = accounts[4]
		const addressbvEeWw = accounts[4]
		const uintCTVFHo = BigInt("1487")
		const addressIXNFH6q = accounts[4]
		const addressJ4zp2M9 = accounts[0]
		const addressAHHkpQh = await afiControllernEtApin.approveStrategy.call(addresst2FGgO, addressE7fjjL5, {from: accounts[3]});
		const addressUDD6e1E = await afiControllernEtApin.setConverter.call(addressbvEeWw, addressWs3g4VD, addressmo6tik, {from: accounts[3]});
//		const addresssmzV8Hv = await afiControllernEtApin.yearn.call(addressJ4zp2M9, addressIXNFH6q, uintCTVFHo, {from: accounts[3]});

		await expect(afiControllernEtApin.yearn.call(addressJ4zp2M9, addressIXNFH6q, uintCTVFHo, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressdc43w1L = accounts[2]
		const afiControllerZOcFUVb = await afiController.new(addressdc43w1L, {from: accounts[1]});
		const uint8Xaet7 = BigInt("514")
		const addresshZToObk = "0x0000000000000000000000000000000000000001"
		const addressL1BLRim = accounts[1]
		const uintcGhL9M9 = BigInt("657")
		const addressHzvXhNJ = accounts[1]
//		const uintytjQRM = await afiControllerZOcFUVb.getExpectedReturn.call(addressL1BLRim, addresshZToObk, uint8Xaet7, {from: accounts[5]});
//		const addresscV81dlK = await afiControllerZOcFUVb.earn.call(addressHzvXhNJ, uintcGhL9M9, {from: accounts[1]});

		await expect(afiControllerZOcFUVb.getExpectedReturn.call(addressL1BLRim, addresshZToObk, uint8Xaet7, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressJ1S0be = accounts[2]
		const afiControllerO4lBMgL = await afiController.new(addressJ1S0be, {from: accounts[4]});
		const addressaG2Atej = accounts[4]
		const addressTfc2kFJ = accounts[3]
		const addressZAlAxGS = accounts[0]
		const addressXFweGB7 = accounts[3]
		const addressfp1rLr9 = accounts[6]
		const addressUxpumOK = accounts[2]
//		const addressHGCDKMB = await afiControllerO4lBMgL.setGovernance.call(addressaG2Atej, {from: accounts[0]});
//		const addressrQxTtJQ = await afiControllerO4lBMgL.setVault.call(addressZAlAxGS, addressTfc2kFJ, {from: accounts[3]});
//		const addressCnBJZjn = await afiControllerO4lBMgL.setConverter.call(addressUxpumOK, addressfp1rLr9, addressXFweGB7, {from: accounts[1]});

		await expect(afiControllerO4lBMgL.setGovernance.call(addressaG2Atej, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressz7SW7k = accounts[2]
		const afiControllerO4lBMgL = await afiController.new(addressz7SW7k, {from: accounts[4]});
		const uintwiq3QyK = BigInt("881")
		const addressUaxBhrY = accounts[2]
		const addressnhRfqvM = accounts[0]
		const addressgpfALaY = accounts[4]
		const addressmWyi6Fq = accounts[5]
		const addressgWRPLxj = accounts[2]
//		const addresspFsEFUm = await afiControllerO4lBMgL.inCaseTokensGetStuck.call(addressUaxBhrY, uintwiq3QyK, {from: accounts[1]});
//		const addressxlXKxN = await afiControllerO4lBMgL.withdrawAll.call(addressnhRfqvM, {from: accounts[5]});
//		const addressCnBJZjn = await afiControllerO4lBMgL.setConverter.call(addressgWRPLxj, addressmWyi6Fq, addressgpfALaY, {from: accounts[1]});

		await expect(afiControllerO4lBMgL.inCaseTokensGetStuck.call(addressUaxBhrY, uintwiq3QyK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressQBOxwDt = "0x0000000000000000000000000000000000000001"
		const afiControllernEtApin = await afiController.new(addressQBOxwDt, {from: accounts[3]});
		const addressBdpPhvu = accounts[1]
		const addressG8jR4wG = "0x0000000000000000000000000000000000000001"
		const addressgjqv1Qu = accounts[4]
		const addressSdXZVp9 = accounts[5]
//		const addressJPFLZKp = await afiControllernEtApin.inCaseStrategyTokenGetStuck.call(addressG8jR4wG, addressBdpPhvu, {from: accounts[1]});
//		const addressAHHkpQh = await afiControllernEtApin.approveStrategy.call(addressSdXZVp9, addressgjqv1Qu, {from: accounts[3]});

		await expect(afiControllernEtApin.inCaseStrategyTokenGetStuck.call(addressG8jR4wG, addressBdpPhvu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressqYfjXcY = accounts[3]
		const afiControllergQZe29m = await afiController.new(addressqYfjXcY, {from: accounts[0]});
		const addressZBgwI9m = accounts[5]
		const uintu0Q6hVZ = BigInt("1245")
		const addressykZvcPt = accounts[1]
		const addresss5MFIUV = accounts[3]
		const addressVdZzgxx = accounts[0]
		const addressCNBPokg = accounts[4]
//		const uintwxNQWyB = await afiControllergQZe29m.balanceOf.call(addressZBgwI9m, {from: accounts[2]});
//		const addressrM5QDi0 = await afiControllergQZe29m.withdraw.call(addressykZvcPt, uintu0Q6hVZ, {from: accounts[0]});
//		const addressbpnVBuX = await afiControllergQZe29m.setStrategy.call(addressVdZzgxx, addresss5MFIUV, {from: accounts[0]});
//		const addressAZzh80p = await afiControllergQZe29m.setGovernance.call(addressCNBPokg, {from: accounts[3]});

		await expect(afiControllergQZe29m.balanceOf.call(addressZBgwI9m, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const address4C2ffV = "0x0000000000000000000000000000000000000001"
		const afiControllernEtApin = await afiController.new(address4C2ffV, {from: accounts[3]});
		const addressIYB8MTw = accounts[4]
		const addressuQ6trw = accounts[5]
		const addressRZfPjO = accounts[0]
		const addressAHHkpQh = await afiControllernEtApin.approveStrategy.call(addressuQ6trw, addressIYB8MTw, {from: accounts[3]});
		const addresslqrjBYr = await afiControllernEtApin.setRewards.call(addressRZfPjO, {from: accounts[3]});
	});

	it('test for afiController', async () => {
		const addressYmbr2S = accounts[2]
		const afiControllerO4lBMgL = await afiController.new(addressYmbr2S, {from: accounts[4]});
		const uintjt5sqqj = BigInt("694")
		const addressf79EpYm = accounts[2]
		const uintEy5tHbQ = BigInt("336")
		const addressNT962An = accounts[4]
		const addressFgENFp2 = accounts[3]
		const addressWzFo5Qj = accounts[5]
		const addressFYrCuaP = accounts[2]
//		const addressij97YWi = await afiControllerO4lBMgL.withdraw.call(addressf79EpYm, uintjt5sqqj, {from: accounts[1]});
//		const addressJRc8K14 = await afiControllerO4lBMgL.inCaseTokensGetStuck.call(addressNT962An, uintEy5tHbQ, {from: accounts[5]});
//		const addressCnBJZjn = await afiControllerO4lBMgL.setConverter.call(addressFYrCuaP, addressWzFo5Qj, addressFgENFp2, {from: accounts[1]});

		await expect(afiControllerO4lBMgL.withdraw.call(addressf79EpYm, uintjt5sqqj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressJU7klq4 = accounts[2]
		const afiControllerO4lBMgL = await afiController.new(addressJU7klq4, {from: accounts[4]});
		const address6VIUDJ = accounts[4]
		const addressWyqXpEf = accounts[1]
		const addressQ25sexB = accounts[3]
		const addressZ6Sn3z4 = accounts[5]
		const addressBoWtRuD = accounts[2]
		const addressGttH90r = accounts[4]
		const addressSPHF6yk = accounts[3]
		const addressEv01KDx = accounts[2]
//		const addresskrkA0UO = await afiControllerO4lBMgL.setVault.call(addressWyqXpEf, address6VIUDJ, {from: "0x0000000000000000000000000000000000000001"});
//		const addressCnBJZjn = await afiControllerO4lBMgL.setConverter.call(addressBoWtRuD, addressZ6Sn3z4, addressQ25sexB, {from: accounts[1]});
//		const addresswnoDTVx = await afiControllerO4lBMgL.setConverter.call(addressEv01KDx, addressSPHF6yk, addressGttH90r, {from: accounts[1]});

		await expect(afiControllerO4lBMgL.setVault.call(addressWyqXpEf, address6VIUDJ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressY58KAkh = accounts[2]
		const afiControllerO4lBMgL = await afiController.new(addressY58KAkh, {from: accounts[4]});
		const uinto42DHK = BigInt("1169")
		const address3cOTB1 = "0x0000000000000000000000000000000000000001"
		const addressDE0LcVd = accounts[3]
		const addressWYUTxVq = accounts[5]
		const addressgt3NXd = accounts[3]
		const addressFTPkVNE = accounts[5]
		const addressrQ4LigH = "0x0000000000000000000000000000000000000002"
//		const uintohoyocC = await afiControllerO4lBMgL.setSplit.call(uinto42DHK, {from: accounts[1]});
//		const addresskFwnK8 = await afiControllerO4lBMgL.setVault.call(addressDE0LcVd, address3cOTB1, {from: accounts[2]});
//		const addressJEj3qx3 = await afiControllerO4lBMgL.withdrawAll.call(addressWYUTxVq, {from: accounts[3]});
//		const addressCnBJZjn = await afiControllerO4lBMgL.setConverter.call(addressrQ4LigH, addressFTPkVNE, addressgt3NXd, {from: accounts[1]});

		await expect(afiControllerO4lBMgL.setSplit.call(uinto42DHK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressE2GGJ7h = accounts[2]
		const afiControllerO4lBMgL = await afiController.new(addressE2GGJ7h, {from: accounts[4]});
		const uintEbooIJz = BigInt("1282")
		const addresss4qmwHu = accounts[0]
		const addressDBgNFWu = accounts[3]
		const addressbhnuPuj = accounts[6]
		const address2SMZ42 = accounts[2]
//		const addressTB31G3b = await afiControllerO4lBMgL.inCaseTokensGetStuck.call(addresss4qmwHu, uintEbooIJz, {from: accounts[4]});
//		const addressCnBJZjn = await afiControllerO4lBMgL.setConverter.call(address2SMZ42, addressbhnuPuj, addressDBgNFWu, {from: accounts[1]});

		await expect(afiControllerO4lBMgL.inCaseTokensGetStuck.call(addresss4qmwHu, uintEbooIJz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressl0H618m = accounts[2]
		const afiControllerO4lBMgL = await afiController.new(addressl0H618m, {from: accounts[4]});
		const addressKEBzf9o = accounts[4]
		const addressIIjsmB = "0x0000000000000000000000000000000000000001"
		const addressBXoqiAg = accounts[3]
		const addressbyd7sB5 = accounts[5]
		const addressOeK096j = accounts[2]
//		const addresspBxRfjQ = await afiControllerO4lBMgL.setStrategy.call(addressIIjsmB, addressKEBzf9o, {from: accounts[4]});
//		const addressCnBJZjn = await afiControllerO4lBMgL.setConverter.call(addressOeK096j, addressbyd7sB5, addressBXoqiAg, {from: accounts[1]});

		await expect(afiControllerO4lBMgL.setStrategy.call(addressIIjsmB, addressKEBzf9o, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})