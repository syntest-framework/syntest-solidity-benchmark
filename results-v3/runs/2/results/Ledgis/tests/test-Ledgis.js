const Ledgis = artifacts.require("Ledgis");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ledgis', (accounts) => {
	it('test for Ledgis', async () => {
		const LedgisRvqbUVb = await Ledgis.new({from: accounts[2]});
		const uintpm3eX5 = BigInt("1418")
		const uintbyB6ycK = BigInt("610")
		const addressn30H71d = accounts[5]
		const uint256R9hoDeP = await LedgisRvqbUVb.afterTime.call(uintpm3eX5, {from: accounts[0]});
		const boolotAnw1q = await LedgisRvqbUVb.approve.call(addressn30H71d, uintbyB6ycK, {from: accounts[0]});

		assert.equal(boolotAnw1q, true)
		assert.equal(uint256R9hoDeP, BigInt("1630232293"))
	});

	it('test for Ledgis', async () => {
		const LedgisgFLHgKA = await Ledgis.new({from: accounts[5]});
		const uintnkXLEo3 = BigInt("329")
		const addressuEXt17P = accounts[1]
		const addresstyf3FF3 = await LedgisgFLHgKA.unlock.call(addressuEXt17P, uintnkXLEo3, {from: accounts[0]});
		await LedgisgFLHgKA.whenNotFrozen.call({from: accounts[4]});

		await expect(LedgisgFLHgKA.unlock.call(addressuEXt17P, uintnkXLEo3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisJn63aTf = await Ledgis.new({from: accounts[5]});
		const uintn6vWiL = BigInt("1647")
		const addressE5UmRZ6 = accounts[0]
		const uintDKyivIF = BigInt("1230")
		const addressatqbRLH = accounts[4]
		const uintws5z3cj = BigInt("1453")
		const addressZWFjMz = accounts[0]
		const uint256TW8rTHP = await LedgisJn63aTf.afterTime.call(uintn6vWiL, {from: accounts[1]});
		const uint256iHygVpC = await LedgisJn63aTf.balanceOf.call(addressE5UmRZ6, {from: accounts[2]});
		const boolavzt2Dm = await LedgisJn63aTf.transfer.call(addressatqbRLH, uintDKyivIF, {from: accounts[2]});
		const boollfrrz2Y = await LedgisJn63aTf.approve.call(addressZWFjMz, uintws5z3cj, {from: accounts[0]});
		await LedgisJn63aTf.pause.call({from: accounts[2]});

		assert.equal(uint256TW8rTHP, BigInt("1630232516"))
		assert.equal(uint256iHygVpC, BigInt("0"))
		await expect(LedgisJn63aTf.transfer.call(addressatqbRLH, uintDKyivIF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisgdLVuKw = await Ledgis.new({from: accounts[5]});
		const uintl082AJ7 = BigInt("1602")
		const addressPHXoW4S = accounts[1]
		const uintKzlcGta = BigInt("113")
		const addresskx6GPd = accounts[1]
		const addresst7Xwwc4 = accounts[0]
		const addresshTddrRb = accounts[2]
		await LedgisgdLVuKw.lockState.call(addressPHXoW4S, uintl082AJ7, {from: accounts[4]});
		const booleKt9iUH = await LedgisgdLVuKw.transferFrom.call(addresst7Xwwc4, addresskx6GPd, uintKzlcGta, {from: accounts[5]});
		const addressZXOF7hv = await LedgisgdLVuKw.transferOwnership.call(addresshTddrRb, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LedgisgdLVuKw.lockState.call(addressPHXoW4S, uintl082AJ7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisDvNc59 = await Ledgis.new({from: accounts[3]});
		const addressLlXQG3 = accounts[2]
		await LedgisDvNc59.whenPaused.call({from: accounts[2]});
		const booloyHPEhc = await LedgisDvNc59.isFrozen.call(addressLlXQG3, {from: accounts[3]});
		await LedgisDvNc59.whenNotPaused.call({from: accounts[1]});

		await expect(LedgisDvNc59.whenPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisJn63aTf = await Ledgis.new({from: accounts[5]});
		const uintU4dDegl = BigInt("2025")
		const addresslc5yb0H = accounts[0]
		const uintZ2aZ2Ld = BigInt("1453")
		const addressUe1R0NX = accounts[0]
		const uintpqlfKeM = BigInt("2040")
		const addressVhT0Ogc = "0x0000000000000000000000000000000000000001"
		const uint256TW8rTHP = await LedgisJn63aTf.afterTime.call(uintU4dDegl, {from: accounts[1]});
		const uint256iHygVpC = await LedgisJn63aTf.balanceOf.call(addresslc5yb0H, {from: accounts[2]});
		const boollfrrz2Y = await LedgisJn63aTf.approve.call(addressUe1R0NX, uintZ2aZ2Ld, {from: accounts[0]});
		const uint256oECV6U1 = await LedgisJn63aTf.totalSupply.call({from: accounts[1]});
		await LedgisJn63aTf.lockState.call(addressVhT0Ogc, uintpqlfKeM, {from: accounts[2]});
		await LedgisJn63aTf.pause.call({from: accounts[2]});

		assert.equal(boollfrrz2Y, true)
		assert.equal(uint256TW8rTHP, BigInt("1630232881"))
		assert.equal(uint256iHygVpC, BigInt("0"))
		assert.equal(uint256oECV6U1, BigInt("10000000000000"))
		await expect(LedgisJn63aTf.lockState.call(addressVhT0Ogc, uintpqlfKeM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisJn63aTf = await Ledgis.new({from: accounts[5]});
		const uintglDhue0 = BigInt("1647")
		const addressdorfN0Z = accounts[0]
		const uintqZLIVgT = BigInt("1497")
		const addresstEhQ3XG = accounts[1]
		const uint256TW8rTHP = await LedgisJn63aTf.afterTime.call(uintglDhue0, {from: accounts[1]});
		const uint256iHygVpC = await LedgisJn63aTf.balanceOf.call(addressdorfN0Z, {from: accounts[2]});
		const boollfrrz2Y = await LedgisJn63aTf.approve.call(addresstEhQ3XG, uintqZLIVgT, {from: accounts[0]});
		const uint256thugesG = await LedgisJn63aTf.currentTime.call({from: accounts[1]});

		assert.equal(boollfrrz2Y, true)
		assert.equal(uint256TW8rTHP, BigInt("1630232510"))
		assert.equal(uint256iHygVpC, BigInt("0"))
		assert.equal(uint256thugesG, BigInt("1630230863"))
	});

	it('test for Ledgis', async () => {
		const LedgisRvqbUVb = await Ledgis.new({from: accounts[2]});
		const uintkk3Hqnp = BigInt("754")
		const addressS5ImQVQ = accounts[3]
		const addressi4A59z9 = accounts[2]
		const uintjoWIayA = BigInt("610")
		const addresshn05Qzo = accounts[5]
		const uint256R9hoDeP = await LedgisRvqbUVb.afterTime.call(uintkk3Hqnp, {from: accounts[0]});
		const uint256QZcvA9H = await LedgisRvqbUVb.allowance.call(addressi4A59z9, addressS5ImQVQ, {from: accounts[4]});
		const boolotAnw1q = await LedgisRvqbUVb.approve.call(addresshn05Qzo, uintjoWIayA, {from: accounts[0]});

		assert.equal(boolotAnw1q, true)
		assert.equal(uint256QZcvA9H, BigInt("0"))
		assert.equal(uint256R9hoDeP, BigInt("1630231625"))
	});

	it('test for Ledgis', async () => {
		const Ledgisf8ufmPX = await Ledgis.new({from: accounts[3]});
		const uintzp1Gb97 = BigInt("1652")
		const addressrpbchHt = accounts[3]
		const uintMR4bkhP = BigInt("1231")
		const addressANMEycz = accounts[5]
		const addressqmiQkY4 = accounts[2]
		const boolR8jTvb2 = await Ledgisf8ufmPX.decreaseAllowance.call(addressrpbchHt, uintzp1Gb97, {from: accounts[5]});
		const addresspaQf4f = await Ledgisf8ufmPX.burn.call(addressANMEycz, uintMR4bkhP, {from: accounts[0]});
		await Ledgisf8ufmPX.renounceOwnership.call({from: accounts[0]});
		const addressfpMHqRa = await Ledgisf8ufmPX.unfreeze.call(addressqmiQkY4, {from: accounts[2]});

		await expect(Ledgisf8ufmPX.decreaseAllowance.call(addressrpbchHt, uintzp1Gb97, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisRvqbUVb = await Ledgis.new({from: accounts[2]});
		const uintg5HMvuj = BigInt("1423")
		const addressGwd0VsH = "0x0000000000000000000000000000000000000001"
		const uintkM78Cky = BigInt("610")
		const addressjV3Zfgt = accounts[5]
		const uint256R9hoDeP = await LedgisRvqbUVb.afterTime.call(uintg5HMvuj, {from: accounts[0]});
		const addressqpIqw5z = await LedgisRvqbUVb.transferOwnership.call(addressGwd0VsH, {from: accounts[2]});
		await LedgisRvqbUVb.whenNotFrozen.call({from: accounts[1]});
		const boolotAnw1q = await LedgisRvqbUVb.approve.call(addressjV3Zfgt, uintkM78Cky, {from: accounts[0]});

		assert.equal(uint256R9hoDeP, BigInt("1630232288"))
		await expect(LedgisRvqbUVb.whenNotFrozen.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisf8ufmPX = await Ledgis.new({from: accounts[3]});
		const addressb13JfIw = accounts[5]
		const uintMhG0Hsl = BigInt("1317")
		const addressGuwND6 = accounts[2]
		const uintKJ7QNI4 = BigInt("1160")
		const addressfTQg6Pq = accounts[4]
		const uint256fsblbnQ = await Ledgisf8ufmPX.balanceOf.call(addressb13JfIw, {from: accounts[2]});
		const boolHkutVN = await Ledgisf8ufmPX.increaseAllowance.call(addressGuwND6, uintMhG0Hsl, {from: accounts[3]});
		const boolpe9y0JR = await Ledgisf8ufmPX.decreaseAllowance.call(addressfTQg6Pq, uintKJ7QNI4, {from: accounts[0]});

		assert.equal(boolHkutVN, true)
		assert.equal(uint256fsblbnQ, BigInt("0"))
		await expect(Ledgisf8ufmPX.decreaseAllowance.call(addressfTQg6Pq, uintKJ7QNI4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisf8ufmPX = await Ledgis.new({from: accounts[3]});
		const addressfwHgeHb = accounts[4]
		const uintZiOkFrp = BigInt("1219")
		const address2QvqPs = accounts[1]
		const addresskT9LKZg = accounts[2]
		const uint256BQbwNkM = await Ledgisf8ufmPX.balanceOf.call(addressfwHgeHb, {from: accounts[2]});
		const addressCtp3CIp = await Ledgisf8ufmPX.unlock.call(address2QvqPs, uintZiOkFrp, {from: accounts[3]});
		const addressfpMHqRa = await Ledgisf8ufmPX.unfreeze.call(addresskT9LKZg, {from: accounts[2]});

		assert.equal(uint256BQbwNkM, BigInt("0"))
		await expect(Ledgisf8ufmPX.unlock.call(address2QvqPs, uintZiOkFrp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisf8ufmPX = await Ledgis.new({from: accounts[3]});
		const addresshNNQuDa = accounts[2]
		const addressODHUqfq = accounts[5]
		const uint256ZGtLIvI = await Ledgisf8ufmPX.lockCount.call(addresshNNQuDa, {from: accounts[0]});
		await Ledgisf8ufmPX.whenNotPaused.call({from: accounts[1]});
		const uint256fsblbnQ = await Ledgisf8ufmPX.balanceOf.call(addressODHUqfq, {from: accounts[2]});

		assert.equal(uint256ZGtLIvI, BigInt("0"))
		await expect(Ledgisf8ufmPX.whenNotPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisf8ufmPX = await Ledgis.new({from: accounts[3]});
		const addressM2pOXBR = accounts[5]
		const uintUw6GJcS = BigInt("637")
		const addresss9bBUK = accounts[0]
		const addressqYi1W1z = accounts[1]
		const uint256fsblbnQ = await Ledgisf8ufmPX.balanceOf.call(addressM2pOXBR, {from: accounts[2]});
		const uint2568KTC1c = await Ledgisf8ufmPX.currentTime.call({from: "0x0000000000000000000000000000000000000001"});
		const booloWMVySH = await Ledgisf8ufmPX.transferFrom.call(addressqYi1W1z, addresss9bBUK, uintUw6GJcS, {from: accounts[0]});
		await Ledgisf8ufmPX.unpause.call({from: accounts[5]});

		assert.equal(uint2568KTC1c, BigInt("1630230859"))
		assert.equal(uint256fsblbnQ, BigInt("0"))
		await expect(Ledgisf8ufmPX.transferFrom.call(addressqYi1W1z, addresss9bBUK, uintUw6GJcS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisRvqbUVb = await Ledgis.new({from: accounts[2]});
		const uintCYEHvwR = BigInt("1871")
		const addressFh9pLKY = accounts[4]
		const uint256R9hoDeP = await LedgisRvqbUVb.afterTime.call(uintCYEHvwR, {from: accounts[0]});
		const boolwAUA1ng = await LedgisRvqbUVb.isFrozen.call(addressFh9pLKY, {from: accounts[3]});

		assert.equal(boolwAUA1ng, false)
		assert.equal(uint256R9hoDeP, BigInt("1630232734"))
	});

	it('test for Ledgis', async () => {
		const LedgisRvqbUVb = await Ledgis.new({from: accounts[2]});
		const uintsivzBTT = BigInt("1864")
		const uintnUb7zxM = BigInt("1765")
		const addressAnbwXnE = accounts[5]
		const uint256R9hoDeP = await LedgisRvqbUVb.afterTime.call(uintsivzBTT, {from: accounts[0]});
		await LedgisRvqbUVb.renounceOwnership.call({from: accounts[2]});
		await LedgisRvqbUVb.lockState.call(addressAnbwXnE, uintnUb7zxM, {from: accounts[5]});

		assert.equal(uint256R9hoDeP, BigInt("1630232720"))
		await expect(LedgisRvqbUVb.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisf8ufmPX = await Ledgis.new({from: accounts[3]});
		const addressyVi3OoK = accounts[5]
		const uintVcKdO79 = BigInt("661")
		const addressNKjt41T = accounts[5]
		const uintO4bBD16 = BigInt("1388")
		const addresswuysMwr = "0x0000000000000000000000000000000000000001"
		const uint256fsblbnQ = await Ledgisf8ufmPX.balanceOf.call(addressyVi3OoK, {from: accounts[2]});
		const addressWQnoddR = await Ledgisf8ufmPX.burn.call(addressNKjt41T, uintVcKdO79, {from: accounts[3]});
		const boolOjGttXd = await Ledgisf8ufmPX.transfer.call(addresswuysMwr, uintO4bBD16, {from: accounts[0]});

		assert.equal(uint256fsblbnQ, BigInt("0"))
		await expect(Ledgisf8ufmPX.burn.call(addressNKjt41T, uintVcKdO79, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisf8ufmPX = await Ledgis.new({from: accounts[3]});
		const uintvtgX0EW = BigInt("1716")
		const uintkZtG6f8 = BigInt("1996")
		const addressfkP7Y9 = accounts[1]
		const uintbkb0uOO = BigInt("639")
		const addressvbiaMkg = accounts[4]
		const addressdDQUTs2 = accounts[3]
		const boolemNJaEz = await Ledgisf8ufmPX.transferWithLock.call(addressfkP7Y9, uintkZtG6f8, uintvtgX0EW, {from: accounts[3]});
		const booltvQSOoI = await Ledgisf8ufmPX.transfer.call(addressvbiaMkg, uintbkb0uOO, {from: accounts[2]});
		const addressfpMHqRa = await Ledgisf8ufmPX.unfreeze.call(addressdDQUTs2, {from: accounts[2]});

		assert.equal(boolemNJaEz, true)
		await expect(Ledgisf8ufmPX.transfer.call(addressvbiaMkg, uintbkb0uOO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisRvqbUVb = await Ledgis.new({from: accounts[2]});
		const uintE60CDNu = BigInt("476")
		const uintwQBeU7b = BigInt("1356")
		const addressSZU80GT = accounts[1]
		const uintS58jJVc = BigInt("1865")
		await LedgisRvqbUVb.pause.call({from: accounts[2]});
		const addressNmqr8xU = await LedgisRvqbUVb.lock.call(addressSZU80GT, uintwQBeU7b, uintE60CDNu, {from: "0x0000000000000000000000000000000000000001"});
		const uint256R9hoDeP = await LedgisRvqbUVb.afterTime.call(uintS58jJVc, {from: accounts[0]});

		await expect(LedgisRvqbUVb.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisf8ufmPX = await Ledgis.new({from: accounts[3]});
		const addressB7KEfNa = accounts[4]
		const addressyDIVqK5 = accounts[5]
		await Ledgisf8ufmPX.unpause.call({from: accounts[3]});
		const addresssj81i7q = await Ledgisf8ufmPX.freeze.call(addressB7KEfNa, {from: accounts[4]});
		const uint256fsblbnQ = await Ledgisf8ufmPX.balanceOf.call(addressyDIVqK5, {from: accounts[2]});

		await expect(Ledgisf8ufmPX.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisf8ufmPX = await Ledgis.new({from: accounts[3]});
		const addressEvNFTME = accounts[4]
		const addressbWmFRfd = accounts[2]
		const addressryY4U3w = accounts[5]
		const addressZNoWdiV = await Ledgisf8ufmPX.unfreeze.call(addressEvNFTME, {from: accounts[3]});
		const addressL1TUlc = await Ledgisf8ufmPX.freeze.call(addressbWmFRfd, {from: accounts[5]});
		const uint256fsblbnQ = await Ledgisf8ufmPX.balanceOf.call(addressryY4U3w, {from: accounts[2]});

		await expect(Ledgisf8ufmPX.freeze.call(addressbWmFRfd, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisf8ufmPX = await Ledgis.new({from: accounts[3]});
		const addressOSMbV8U = accounts[5]
		const uintOvkEeKi = BigInt("1804")
		const uintved7OP9 = BigInt("1223")
		const addressZYFdqU2 = accounts[4]
		const uintckRJEzP = BigInt("910")
		const addressnONSe3i = accounts[0]
		const uint256fsblbnQ = await Ledgisf8ufmPX.balanceOf.call(addressOSMbV8U, {from: accounts[2]});
		const addressDlu7uhy = await Ledgisf8ufmPX.lockAfter.call(addressZYFdqU2, uintved7OP9, uintOvkEeKi, {from: accounts[3]});
		const boolmisHI9E = await Ledgisf8ufmPX.decreaseAllowance.call(addressnONSe3i, uintckRJEzP, {from: accounts[0]});

		assert.equal(uint256fsblbnQ, BigInt("0"))
		await expect(Ledgisf8ufmPX.lockAfter.call(addressZYFdqU2, uintved7OP9, uintOvkEeKi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisRvqbUVb = await Ledgis.new({from: accounts[2]});
		const uintSjU8UQ3 = BigInt("1837")
		const uintMdFDwhT = BigInt("424")
		const addressWIvBMAx = "0x0000000000000000000000000000000000000001"
		const uint5eCw6L = BigInt("981")
		const addressQJmHfZ = accounts[3]
		const uintrUpq4iV = BigInt("125")
		const addressguaFnK = await LedgisRvqbUVb.lock.call(addressWIvBMAx, uintMdFDwhT, uintSjU8UQ3, {from: accounts[2]});
		const boolrcNFBYi = await LedgisRvqbUVb.transfer.call(addressQJmHfZ, uint5eCw6L, {from: accounts[1]});
		const uint256iTejiDp = await LedgisRvqbUVb.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256R9hoDeP = await LedgisRvqbUVb.afterTime.call(uintrUpq4iV, {from: accounts[0]});

		await expect(LedgisRvqbUVb.lock.call(addressWIvBMAx, uintMdFDwhT, uintSjU8UQ3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiswCxKIwd = await Ledgis.new({from: "0x0000000000000000000000000000000000000001"});
		const uintzvsYC9 = BigInt("292")
		const addressrneszyQ = accounts[3]
		const addressvAltTcP = accounts[2]
		const addressk9fsuWM = accounts[4]
		const uintFyPV9Sz = BigInt("323")
		const addressJwaXk7N = accounts[4]
		const boolsOpdtaG = await LedgiswCxKIwd.transferFrom.call(addressvAltTcP, addressrneszyQ, uintzvsYC9, {from: accounts[0]});
		const uint256ZLmZvtx = await LedgiswCxKIwd.lockCount.call(addressk9fsuWM, {from: accounts[4]});
		await LedgiswCxKIwd.whenNotPaused.call({from: accounts[3]});
		await LedgiswCxKIwd.lockState.call(addressJwaXk7N, uintFyPV9Sz, {from: accounts[5]});
	});

	it('test for Ledgis', async () => {
		const Ledgisf8ufmPX = await Ledgis.new({from: accounts[3]});
		const uinty50q3uP = BigInt("1663")
		const uintKsVwUbL = BigInt("1268")
		const addressRw5DC8S = accounts[2]
		const uintk41lQdq = BigInt("429")
		const addressAskVO8O = accounts[5]
		const addressPPp6kA = accounts[5]
		const boolDZDMJQ = await Ledgisf8ufmPX.transferWithLockAfter.call(addressRw5DC8S, uintKsVwUbL, uinty50q3uP, {from: accounts[3]});
		const booly4WnX2b = await Ledgisf8ufmPX.mint.call(addressAskVO8O, uintk41lQdq, {from: accounts[4]});
		const uint256Yp31AhD = await Ledgisf8ufmPX.currentTime.call({from: accounts[4]});
		const uint256fsblbnQ = await Ledgisf8ufmPX.balanceOf.call(addressPPp6kA, {from: accounts[2]});

		assert.equal(boolDZDMJQ, true)
		await expect(Ledgisf8ufmPX.mint.call(addressAskVO8O, uintk41lQdq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisRvqbUVb = await Ledgis.new({from: accounts[2]});
		const uint9ZwG9f = BigInt("690")
		const addressYe4bk9 = accounts[3]
		const uintzMsnUh8 = BigInt("1067")
		const addressPqFYFq5 = accounts[4]
		const uintLFYltv0 = BigInt("1868")
		const boolbc1WsRn = await LedgisRvqbUVb.mint.call(addressYe4bk9, uint9ZwG9f, {from: accounts[2]});
		const boolYmUhhZz = await LedgisRvqbUVb.increaseAllowance.call(addressPqFYFq5, uintzMsnUh8, {from: accounts[3]});
		await LedgisRvqbUVb.renounceOwnership.call({from: accounts[5]});
		const uint256R9hoDeP = await LedgisRvqbUVb.afterTime.call(uintLFYltv0, {from: accounts[0]});

		assert.equal(boolYmUhhZz, true)
		assert.equal(boolbc1WsRn, true)
		await expect(LedgisRvqbUVb.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisRvqbUVb = await Ledgis.new({from: accounts[2]});
		const uintVjNvVJu = BigInt("1900")
		const addressdaI5wQ5 = accounts[4]
		const uint256R9hoDeP = await LedgisRvqbUVb.afterTime.call(uintVjNvVJu, {from: accounts[0]});
		const addressyxoPpJf = await LedgisRvqbUVb.freeze.call(addressdaI5wQ5, {from: accounts[2]});

		assert.equal(uint256R9hoDeP, BigInt("1630232775"))
	});

	it('test for Ledgis', async () => {
		const Ledgis1QfIWM = await Ledgis.new({from: accounts[2]});
		const uintcpHjHWv = BigInt("1145")
		const addressqab1Z3m = accounts[2]
		const addressjjBUhFq = accounts[1]
		const uintaZrQQp2 = BigInt("154")
		const addressYcGmTuq = accounts[3]
		const addressciGLsI = accounts[5]
		const addressfoeiyjm = accounts[2]
		const addressytpaNKc = await Ledgis1QfIWM.burn.call(addressqab1Z3m, uintcpHjHWv, {from: accounts[2]});
		const addressH4BhFAe = await Ledgis1QfIWM.transferOwnership.call(addressjjBUhFq, {from: accounts[2]});
		const boolOyCHOuZ = await Ledgis1QfIWM.approve.call(addressYcGmTuq, uintaZrQQp2, {from: "0x0000000000000000000000000000000000000001"});
		const uint256sJTkwrl = await Ledgis1QfIWM.lockCount.call(addressciGLsI, {from: accounts[0]});
		const uint256ZnOz2NT = await Ledgis1QfIWM.balanceOf.call(addressfoeiyjm, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolOyCHOuZ, true)
		assert.equal(uint256ZnOz2NT, BigInt("10000000000000"))
		assert.equal(uint256sJTkwrl, BigInt("0"))
	});
})