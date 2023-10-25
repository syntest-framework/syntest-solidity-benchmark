const QuickToken = artifacts.require("QuickToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('QuickToken', (accounts) => {
	it('test for QuickToken', async () => {
		const addressY5HaPcV = "0x0000000000000000000000000000000000000001"
		const address6GWaIZ = accounts[4]
		const QuickTokenJD14zq = await QuickToken.new(addressY5HaPcV, address6GWaIZ, {from: accounts[1]});
		const uintGaDeEU9 = BigInt("480")
		const addressMPHVUkD = accounts[3]
		const addressn8faZ5M = accounts[1]
		const uintrgwjDS6 = BigInt("429")
		const addressoDyo4t = accounts[2]
		const uintcnw9X1R = BigInt("1318")
		const addressnQbt5UM = accounts[5]
		const uintTSysk3u = BigInt("1198")
		const addressDbqCMw = accounts[4]
		const uintvuLFWe = BigInt("2036")
		const addressL8o3R5 = accounts[0]
		const boolbz7Nn1U = await QuickTokenJD14zq.transferFrom.call(addressn8faZ5M, addressMPHVUkD, uintGaDeEU9, {from: "0x0000000000000000000000000000000000000001"});
		const boolHDkxGjG = await QuickTokenJD14zq.approve.call(addressoDyo4t, uintrgwjDS6, {from: accounts[4]});
		const boolSH1yw7 = await QuickTokenJD14zq.approve.call(addressnQbt5UM, uintcnw9X1R, {from: accounts[2]});
		const boolgKy9e4S = await QuickTokenJD14zq.transfer.call(addressDbqCMw, uintTSysk3u, {from: accounts[1]});
		const booladrTejQ = await QuickTokenJD14zq.approve.call(addressL8o3R5, uintvuLFWe, {from: accounts[1]});

		await expect(QuickTokenJD14zq.transferFrom.call(addressn8faZ5M, addressMPHVUkD, uintGaDeEU9, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressGPFMja7 = accounts[3]
		const addressqWQ9XNb = accounts[1]
		const QuickTokenP1JDhrl = await QuickToken.new(addressGPFMja7, addressqWQ9XNb, {from: accounts[3]});
		const addressxrpnkP = accounts[1]
		const uintNCJ3d0D = BigInt("1970")
		const addressWb8xen = accounts[2]
		const addressMGJHiYo = accounts[2]
		const uintB5rqShK = BigInt("1834")
		const addressqISzn8S = accounts[1]
		const uintuvDTeKF = BigInt("1510")
		const addressrsMMcDk = accounts[5]
		const addressaHGvxLX = await QuickTokenP1JDhrl.setMinter.call(addressxrpnkP, {from: accounts[1]});
		const boolBxCOPp5 = await QuickTokenP1JDhrl.transfer.call(addressWb8xen, uintNCJ3d0D, {from: accounts[3]});
		const uintrJV1Tbm = await QuickTokenP1JDhrl.balanceOf.call(addressMGJHiYo, {from: accounts[5]});
		const booldaa9nEG = await QuickTokenP1JDhrl.transfer.call(addressqISzn8S, uintB5rqShK, {from: accounts[5]});
		const boolJISS8ZB = await QuickTokenP1JDhrl.transfer.call(addressrsMMcDk, uintuvDTeKF, {from: accounts[0]});

		assert.equal(boolBxCOPp5, true)
		assert.equal(uintrJV1Tbm, BigInt("0"))
		await expect(QuickTokenP1JDhrl.transfer.call(addressqISzn8S, uintB5rqShK, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressaAvV72l = accounts[0]
		const addressFW8bXoQ = accounts[1]
		const QuickTokenQickAL = await QuickToken.new(addressaAvV72l, addressFW8bXoQ, {from: "0x0000000000000000000000000000000000000001"});
		const addressOKKCEsd = accounts[2]
		const uinterSn48h = BigInt("1313")
		const addressOJmMChv = accounts[4]
		const uintXgC6DMv = BigInt("1303")
		const addresspzJCFvi = "0x0000000000000000000000000000000000000001"
		const addressOP08Lz = accounts[4]
		const addressKVFcTWz = accounts[3]
		const addressgI0NT94 = accounts[4]
		const uintGLewTrV = await QuickTokenQickAL.balanceOf.call(addressOKKCEsd, {from: accounts[1]});
		const boolfswGCS2 = await QuickTokenQickAL.approve.call(addressOJmMChv, uinterSn48h, {from: accounts[0]});
		const boolS5wMYB2 = await QuickTokenQickAL.approve.call(addresspzJCFvi, uintXgC6DMv, {from: accounts[3]});
		const uintizot0AY = await QuickTokenQickAL.allowance.call(addressKVFcTWz, addressOP08Lz, {from: accounts[4]});
		const uintB8g69cs = await QuickTokenQickAL.balanceOf.call(addressgI0NT94, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for QuickToken', async () => {
		const addressn0LyCvZ = accounts[4]
		const addressCWEm05I = accounts[2]
		const QuickTokenvZh8DNl = await QuickToken.new(addressn0LyCvZ, addressCWEm05I, {from: accounts[4]});
		const uintEPos6cD = BigInt("1840")
		const addressg3xKdJH = accounts[0]
		const uinto8qxjUl = BigInt("833")
		const addressYkJjswv = accounts[3]
		const addressnMVU0MZ = accounts[0]
		const addressXOMh16r = accounts[2]
		const uintvzklcIk = BigInt("1852")
		const addressTp6zc8A = accounts[3]
		const addressu6dw37p = accounts[4]
		const addressrggLtl = accounts[0]
		const addressYsPRMIz = await QuickTokenvZh8DNl.mint.call(addressg3xKdJH, uintEPos6cD, {from: accounts[4]});
		const bool4rLBE4 = await QuickTokenvZh8DNl.approve.call(addressYkJjswv, uinto8qxjUl, {from: accounts[1]});
		const uintOfWC6EC = await QuickTokenvZh8DNl.allowance.call(addressXOMh16r, addressnMVU0MZ, {from: accounts[2]});
		const boolPtBv66z = await QuickTokenvZh8DNl.transfer.call(addressTp6zc8A, uintvzklcIk, {from: accounts[1]});
		const uintLo1i5i = await QuickTokenvZh8DNl.allowance.call(addressrggLtl, addressu6dw37p, {from: accounts[2]});

		await expect(QuickTokenvZh8DNl.mint.call(addressg3xKdJH, uintEPos6cD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressZw3fI8 = "0x0000000000000000000000000000000000000001"
		const addressTkKbFTF = accounts[4]
		const QuickTokenpVkarY = await QuickToken.new(addressZw3fI8, addressTkKbFTF, {from: accounts[4]});
		const addresseqKuGPr = accounts[5]
		const addressEKKyOnp = accounts[0]
		const uintCEEst3 = BigInt("613")
		const addressM7FlxbY = accounts[0]
		const uintoJ8g77n = BigInt("87")
		const addressNmfAisB = accounts[4]
		const uintmRXsYV4 = await QuickTokenpVkarY.balanceOf.call(addresseqKuGPr, {from: accounts[3]});
		const addressI9xbq7u = await QuickTokenpVkarY.setMinter.call(addressEKKyOnp, {from: "0x0000000000000000000000000000000000000001"});
		const addressJ2v9AUj = await QuickTokenpVkarY.mint.call(addressM7FlxbY, uintCEEst3, {from: accounts[1]});
		const addressuUepRr9 = await QuickTokenpVkarY.mint.call(addressNmfAisB, uintoJ8g77n, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintmRXsYV4, BigInt("0"))
		await expect(QuickTokenpVkarY.setMinter.call(addressEKKyOnp, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressis0lY05 = accounts[1]
		const addressdkJOJz1 = accounts[3]
		const QuickTokenTKsWugj = await QuickToken.new(addressis0lY05, addressdkJOJz1, {from: accounts[4]});
		const addressRrGKpzX = accounts[4]
		const addressu70hnDq = accounts[0]
		const addressL1VdVH = accounts[0]
		const addressUign0ER = accounts[3]
		const uintzQdgsV = await QuickTokenTKsWugj.balanceOf.call(addressRrGKpzX, {from: accounts[1]});
		const uintAOR75Pu = await QuickTokenTKsWugj.allowance.call(addressL1VdVH, addressu70hnDq, {from: accounts[3]});
		const uintTKHpnwy = await QuickTokenTKsWugj.balanceOf.call(addressUign0ER, {from: accounts[2]});

		assert.equal(uintAOR75Pu, BigInt("0"))
		assert.equal(uintTKHpnwy, BigInt("0"))
		assert.equal(uintzQdgsV, BigInt("0"))
	});

	it('test for QuickToken', async () => {
		const addressHdQSsOp = "0x0000000000000000000000000000000000000001"
		const addressocNe8VD = accounts[0]
		const QuickTokenQmwgJv = await QuickToken.new(addressHdQSsOp, addressocNe8VD, {from: accounts[4]});
		const addressSijl0qH = accounts[5]
		const addresschfVRu3 = accounts[3]
		const uintkmNNRg = BigInt("555")
		const addressMTMozjT = accounts[4]
		const addresshqzqXfG = accounts[0]
		const addressr9PctG = accounts[0]
		const uintuq9AZAT = await QuickTokenQmwgJv.allowance.call(addresschfVRu3, addressSijl0qH, {from: accounts[5]});
		const addresscvkCaim = await QuickTokenQmwgJv.mint.call(addressMTMozjT, uintkmNNRg, {from: accounts[0]});
		const uintSFogr1z = await QuickTokenQmwgJv.allowance.call(addressr9PctG, addresshqzqXfG, {from: accounts[1]});

		assert.equal(uintSFogr1z, BigInt("0"))
		assert.equal(uintuq9AZAT, BigInt("0"))
	});

	it('test for QuickToken', async () => {
		const addressz7VyjtA = "0x0000000000000000000000000000000000000001"
		const addresspZKUd4e = accounts[4]
		const QuickTokenpVkarY = await QuickToken.new(addressz7VyjtA, addresspZKUd4e, {from: accounts[4]});
		const addressG8xPoS = accounts[5]
		const uintmTWDaK = BigInt("780")
		const addressRPsMWiT = accounts[3]
		const addressEXjxc2G = accounts[0]
		const uintL0ShuKN = BigInt("636")
		const addressc25r2LE = accounts[0]
		const uintFgmsTo3 = BigInt("87")
		const addressPo1lJX = accounts[4]
		const uintmRXsYV4 = await QuickTokenpVkarY.balanceOf.call(addressG8xPoS, {from: accounts[3]});
		const boolRFM1iAm = await QuickTokenpVkarY.approve.call(addressRPsMWiT, uintmTWDaK, {from: accounts[4]});
		const addressI9xbq7u = await QuickTokenpVkarY.setMinter.call(addressEXjxc2G, {from: "0x0000000000000000000000000000000000000001"});
		const addressJ2v9AUj = await QuickTokenpVkarY.mint.call(addressc25r2LE, uintL0ShuKN, {from: accounts[1]});
		const addressuUepRr9 = await QuickTokenpVkarY.mint.call(addressPo1lJX, uintFgmsTo3, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolRFM1iAm, true)
		assert.equal(uintmRXsYV4, BigInt("0"))
		await expect(QuickTokenpVkarY.setMinter.call(addressEXjxc2G, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressBmU3gAu = "0x0000000000000000000000000000000000000001"
		const addressPaqrN48 = accounts[4]
		const QuickTokenJD14zq = await QuickToken.new(addressBmU3gAu, addressPaqrN48, {from: accounts[1]});
		const uintzE0Mhdf = BigInt("0")
		const addressr2Nlww1 = accounts[4]
		const uintBAWjbu8 = BigInt("546")
		const addressNfxeSJ = accounts[4]
		const uintEXbxkW = BigInt("1188")
		const addressHpjIIx = accounts[5]
		const uintphxamR7 = BigInt("287")
		const addresszNSXoa = "0x0000000000000000000000000000000000000002"
		const uintF4ToK7K = BigInt("1421")
		const addressOoFcehe = accounts[4]
		const uintjlwIA2K = BigInt("428")
		const addressjCUDzGR = "0x0000000000000000000000000000000000000000"
		const uintvXrEaPQ = BigInt("1802")
		const addressXCSFTUq = accounts[4]
		const addressq0vLaeu = accounts[2]
		const addressI2p9J29 = accounts[2]
		const addressa970vmc = accounts[3]
		const addressl5i7XsW = accounts[0]
		const uintWxinIp = BigInt("2036")
		const addresszLg4vzR = "0x0000000000000000000000000000000000000001"
		const boolhIedux9 = await QuickTokenJD14zq.approve.call(addressr2Nlww1, uintzE0Mhdf, {from: "0x0000000000000000000000000000000000000001"});
		const addressru04QUE = await QuickTokenJD14zq.mint.call(addressNfxeSJ, uintBAWjbu8, {from: accounts[4]});
		const boolSH1yw7 = await QuickTokenJD14zq.approve.call(addressHpjIIx, uintEXbxkW, {from: accounts[2]});
		const boolue79j3K = await QuickTokenJD14zq.approve.call(addresszNSXoa, uintphxamR7, {from: accounts[3]});
		const boolHajZ3RU = await QuickTokenJD14zq.approve.call(addressOoFcehe, uintF4ToK7K, {from: accounts[3]});
		const boolEOhEa51 = await QuickTokenJD14zq.transfer.call(addressjCUDzGR, uintjlwIA2K, {from: accounts[4]});
		const boolgKy9e4S = await QuickTokenJD14zq.transfer.call(addressXCSFTUq, uintvXrEaPQ, {from: accounts[1]});
		const uintKgt6Ftp = await QuickTokenJD14zq.allowance.call(addressI2p9J29, addressq0vLaeu, {from: accounts[1]});
		const uintgh1FCfo = await QuickTokenJD14zq.allowance.call(addressl5i7XsW, addressa970vmc, {from: accounts[0]});
		const addressoRKCUgx = await QuickTokenJD14zq.mint.call(addresszLg4vzR, uintWxinIp, {from: accounts[5]});

		assert.equal(boolHajZ3RU, true)
		assert.equal(boolSH1yw7, true)
		assert.equal(boolhIedux9, true)
		assert.equal(boolue79j3K, true)
		await expect(QuickTokenJD14zq.transfer.call(addressjCUDzGR, uintjlwIA2K, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})