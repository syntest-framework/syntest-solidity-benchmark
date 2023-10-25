const DatrixoEquityToken = artifacts.require("DatrixoEquityToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DatrixoEquityToken', (accounts) => {
	it('test for DatrixoEquityToken', async () => {
		const addressLJobhy = accounts[1]
		const uinty2cB8Z = BigInt("553")
		const DatrixoEquityTokenSfnNuZK = await DatrixoEquityToken.new(addressLJobhy, uinty2cB8Z, {from: accounts[5]});
		const uintBE3dCw = BigInt("1937")
		const uintE5Eqx3i = await DatrixoEquityTokenSfnNuZK.setStart.call(uintBE3dCw, {from: accounts[5]});
		await DatrixoEquityTokenSfnNuZK.afterStartTime.call({from: accounts[3]});

		await expect(DatrixoEquityTokenSfnNuZK.setStart.call(uintBE3dCw, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressBUC43A = accounts[4]
		const uintnbjPwa = BigInt("1268")
		const DatrixoEquityTokenkKiUY7l = await DatrixoEquityToken.new(addressBUC43A, uintnbjPwa, {from: accounts[4]});
		const uintBqRBikI = BigInt("1659")
		const addressvO2XXrB = accounts[3]
		await DatrixoEquityTokenkKiUY7l.afterStartTime.call({from: accounts[4]});
		const boolSoyqJa3 = await DatrixoEquityTokenkKiUY7l.transfer.call(addressvO2XXrB, uintBqRBikI, {from: accounts[5]});

		await expect(DatrixoEquityTokenkKiUY7l.afterStartTime.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressTp86Ftt = accounts[0]
		const uintYWc1lcD = BigInt("1301")
		const DatrixoEquityTokenjcRqGVF = await DatrixoEquityToken.new(addressTp86Ftt, uintYWc1lcD, {from: accounts[5]});
		const addresssUVPzB7 = accounts[5]
		const addressHWwHgQu = accounts[1]
		const addressarraysANIi3y = await DatrixoEquityTokenjcRqGVF.getShareholdersArray.call({from: accounts[3]});
		const addressarray0cRkkv = await DatrixoEquityTokenjcRqGVF.getShareholdersArray.call({from: accounts[2]});
		const boolVMpuCy8 = await DatrixoEquityTokenjcRqGVF.removeShareholder.call(addresssUVPzB7, {from: accounts[5]});
		const boolZqAB7W = await DatrixoEquityTokenjcRqGVF.removeShareholder.call(addressHWwHgQu, {from: accounts[4]});

		assert.equal(addressarray0cRkkv, )
		assert.equal(addressarraysANIi3y, )
		await expect(DatrixoEquityTokenjcRqGVF.removeShareholder.call(addresssUVPzB7, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressAeMwJcc = "0x0000000000000000000000000000000000000001"
		const uintzxrdT6d = BigInt("1313")
		const DatrixoEquityTokenwf9jYMs = await DatrixoEquityToken.new(addressAeMwJcc, uintzxrdT6d, {from: "0x0000000000000000000000000000000000000001"});
		const uintuK0Yqz = BigInt("98")
		const addressWaiWE6w = accounts[0]
		const boolugGSzGa = await DatrixoEquityTokenwf9jYMs.transfer.call(addressWaiWE6w, uintuK0Yqz, {from: accounts[0]});
		const addressarrayl40mi7x = await DatrixoEquityTokenwf9jYMs.getShareholdersArray.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for DatrixoEquityToken', async () => {
		const addresstY2hXjH = accounts[1]
		const uintO30JNvh = BigInt("553")
		const DatrixoEquityTokenSfnNuZK = await DatrixoEquityToken.new(addresstY2hXjH, uintO30JNvh, {from: accounts[5]});
		const uintMGCqykz = BigInt("488")
		const addressUyNns6S = accounts[1]
		const uintjRLbOhR = BigInt("1415")
		const addressjnyr1M8 = accounts[1]
		const addresscMy0wTA = accounts[5]
		const uintHX9Y3M9 = BigInt("1777")
		const uintcYey51C = BigInt("1928")
		const boolKuH7bkO = await DatrixoEquityTokenSfnNuZK.transfer.call(addressUyNns6S, uintMGCqykz, {from: accounts[1]});
		const boolW0b0rQl = await DatrixoEquityTokenSfnNuZK.transferFrom.call(addresscMy0wTA, addressjnyr1M8, uintjRLbOhR, {from: accounts[4]});
		const uintyj9n7bC = await DatrixoEquityTokenSfnNuZK.setStart.call(uintHX9Y3M9, {from: accounts[1]});
		const uintE5Eqx3i = await DatrixoEquityTokenSfnNuZK.setStart.call(uintcYey51C, {from: accounts[5]});
		const addressarraymZtpsMy = await DatrixoEquityTokenSfnNuZK.getShareholdersArray.call({from: accounts[4]});
		await DatrixoEquityTokenSfnNuZK.afterStartTime.call({from: accounts[3]});

		await expect(DatrixoEquityTokenSfnNuZK.transfer.call(addressUyNns6S, uintMGCqykz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressls77vab = accounts[2]
		const uinthxh3MX = BigInt("1004")
		const DatrixoEquityTokenhXTOMj1 = await DatrixoEquityToken.new(addressls77vab, uinthxh3MX, {from: accounts[3]});
		const addressXcq1unJ = accounts[5]
		const uintiAGScD9 = BigInt("1877")
		const addressOQTqXgN = accounts[3]
		const addressPJFXiaB = accounts[2]
		const boolBvGDK9L = await DatrixoEquityTokenhXTOMj1.removeShareholder.call(addressXcq1unJ, {from: accounts[2]});
		const boolofvYbS = await DatrixoEquityTokenhXTOMj1.transferFrom.call(addressPJFXiaB, addressOQTqXgN, uintiAGScD9, {from: accounts[4]});

		await expect(DatrixoEquityTokenhXTOMj1.removeShareholder.call(addressXcq1unJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressawtbxP = accounts[2]
		const uintOd3GWdg = BigInt("1004")
		const DatrixoEquityTokenhXTOMj1 = await DatrixoEquityToken.new(addressawtbxP, uintOd3GWdg, {from: accounts[3]});
		const uintwWUcYXZ = BigInt("1336")
		const addresssSKISkw = accounts[3]
		const addressyGK56uI = accounts[3]
		const addressDX9MSYZ = accounts[7]
		const uintiPjqnTm = BigInt("431")
		const addressJAFqT3K = accounts[2]
		const boolO1uRCV = await DatrixoEquityTokenhXTOMj1.transferFrom.call(addressyGK56uI, addresssSKISkw, uintwWUcYXZ, {from: accounts[2]});
		const boolBvGDK9L = await DatrixoEquityTokenhXTOMj1.removeShareholder.call(addressDX9MSYZ, {from: accounts[2]});
		await DatrixoEquityTokenhXTOMj1.afterStartTime.call({from: accounts[2]});
		const booljytxBYz = await DatrixoEquityTokenhXTOMj1.transfer.call(addressJAFqT3K, uintiPjqnTm, {from: accounts[3]});

		await expect(DatrixoEquityTokenhXTOMj1.transferFrom.call(addressyGK56uI, addresssSKISkw, uintwWUcYXZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresscYAAMN5 = accounts[1]
		const uintOiJNiOM = BigInt("553")
		const DatrixoEquityTokenSfnNuZK = await DatrixoEquityToken.new(addresscYAAMN5, uintOiJNiOM, {from: accounts[5]});
		const uintesJUBMj = BigInt("488")
		const addressNpi4g7 = accounts[2]
		const uintqIahYwd = BigInt("1415")
		const addressfFb7syf = accounts[1]
		const addressI41EfKE = accounts[5]
		const uintlEbTL7W = BigInt("1812")
		const boolKuH7bkO = await DatrixoEquityTokenSfnNuZK.transfer.call(addressNpi4g7, uintesJUBMj, {from: accounts[1]});
		const boolW0b0rQl = await DatrixoEquityTokenSfnNuZK.transferFrom.call(addressI41EfKE, addressfFb7syf, uintqIahYwd, {from: accounts[4]});
		const uintyj9n7bC = await DatrixoEquityTokenSfnNuZK.setStart.call(uintlEbTL7W, {from: accounts[1]});
		const addressarraymZtpsMy = await DatrixoEquityTokenSfnNuZK.getShareholdersArray.call({from: accounts[4]});
		await DatrixoEquityTokenSfnNuZK.afterStartTime.call({from: accounts[3]});

		assert.equal(boolKuH7bkO, true)
		await expect(DatrixoEquityTokenSfnNuZK.transferFrom.call(addressI41EfKE, addressfFb7syf, uintqIahYwd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressPhaOcI1 = accounts[1]
		const uintdUt8ULY = BigInt("553")
		const DatrixoEquityTokenSfnNuZK = await DatrixoEquityToken.new(addressPhaOcI1, uintdUt8ULY, {from: accounts[5]});
		const uintLI6oxHM = BigInt("488")
		const addresswUATnnp = accounts[2]
		const uintDb6Hoo = BigInt("1812")
		const addressUJfY2BF = "0x0000000000000000000000000000000000000001"
		const boolKuH7bkO = await DatrixoEquityTokenSfnNuZK.transfer.call(addresswUATnnp, uintLI6oxHM, {from: accounts[1]});
		const uintyj9n7bC = await DatrixoEquityTokenSfnNuZK.setStart.call(uintDb6Hoo, {from: accounts[1]});
		const boolUeL85P = await DatrixoEquityTokenSfnNuZK.removeShareholder.call(addressUJfY2BF, {from: accounts[0]});
		const addressarraymZtpsMy = await DatrixoEquityTokenSfnNuZK.getShareholdersArray.call({from: accounts[4]});
		await DatrixoEquityTokenSfnNuZK.afterStartTime.call({from: accounts[3]});

		assert.equal(boolKuH7bkO, true)
		await expect(DatrixoEquityTokenSfnNuZK.setStart.call(uintDb6Hoo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressOq61QBq = accounts[2]
		const uintr3hRTHP = BigInt("1004")
		const DatrixoEquityTokenhXTOMj1 = await DatrixoEquityToken.new(addressOq61QBq, uintr3hRTHP, {from: accounts[3]});
		const uintUpxFMf = BigInt("1336")
		const addressw6O87jV = accounts[4]
		const addressCTj2ifg = accounts[2]
		const addressRmMWMWg = accounts[7]
		const uintMUHc02q = BigInt("431")
		const addressMPuFvTr = accounts[2]
		const boolO1uRCV = await DatrixoEquityTokenhXTOMj1.transferFrom.call(addressCTj2ifg, addressw6O87jV, uintUpxFMf, {from: accounts[2]});
		const boolBvGDK9L = await DatrixoEquityTokenhXTOMj1.removeShareholder.call(addressRmMWMWg, {from: accounts[2]});
		await DatrixoEquityTokenhXTOMj1.afterStartTime.call({from: accounts[2]});
		const booljytxBYz = await DatrixoEquityTokenhXTOMj1.transfer.call(addressMPuFvTr, uintMUHc02q, {from: accounts[3]});

		assert.equal(boolO1uRCV, true)
		await expect(DatrixoEquityTokenhXTOMj1.removeShareholder.call(addressRmMWMWg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})