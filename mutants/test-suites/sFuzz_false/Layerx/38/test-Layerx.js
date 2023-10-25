const Layerx = artifacts.require("Layerx");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Layerx', (accounts) => {
	it('test for Layerx', async () => {
		const addressupQUfOb = accounts[4]
		const LayerxHiveaZJ = await Layerx.new(addressupQUfOb, {from: accounts[1]});
		const uintXW14icN = BigInt("551")
		const addresscYfHs35 = accounts[2]
//		await LayerxHiveaZJ.addStakePayment.call({from: accounts[1]});
//		await LayerxHiveaZJ.addStakePayment.call({from: accounts[3]});
//		await LayerxHiveaZJ.unlock.call({from: accounts[3]});
//		const boolVSECyH0 = await LayerxHiveaZJ.transfer.call(addresscYfHs35, uintXW14icN, {from: accounts[0]});
		await LayerxHiveaZJ.addStakePayment.call({from: accounts[1]});

		await expect(LayerxHiveaZJ.addStakePayment.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressRSoPvpd = accounts[4]
		const LayerxA3KDtQn = await Layerx.new(addressRSoPvpd, {from: accounts[0]});
		const uintkPpYFz = BigInt("580")
		const addresspxAihTC = accounts[4]
		const uintfeH8bs7 = BigInt("579")
		const addressj4y8X1J = accounts[2]
		const addressk2DuYZ = "0x0000000000000000000000000000000000000001"
		const uintqEWWrCa = BigInt("864")
		const addressgtT1G7W = accounts[3]
//		await LayerxA3KDtQn.f.call({from: accounts[0]});
//		await LayerxA3KDtQn.addStakePayment.call({from: accounts[2]});
//		const uintSUzRli = await LayerxA3KDtQn.lock.call(uintkPpYFz, {from: accounts[3]});
//		const addresseQC6khB = await LayerxA3KDtQn.setNewStakeCreator.call(addresspxAihTC, {from: accounts[0]});
//		const boolSjxmE1 = await LayerxA3KDtQn.transferFrom.call(addressk2DuYZ, addressj4y8X1J, uintfeH8bs7, {from: accounts[3]});
//		const boolvwz586E = await LayerxA3KDtQn.approve.call(addressgtT1G7W, uintqEWWrCa, {from: accounts[4]});

		await expect(LayerxA3KDtQn.f.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresszZ4duuX = accounts[1]
		const LayerxyFERwpu = await Layerx.new(addresszZ4duuX, {from: accounts[0]});
		const addressOAKxnBU = accounts[0]
		const addressoNdWB13 = accounts[1]
		const uintqP4eT0t = BigInt("1674")
		const uintjx1n90k = await LayerxyFERwpu.allowance.call(addressoNdWB13, addressOAKxnBU, {from: accounts[2]});
//		await LayerxyFERwpu.unlock.call({from: accounts[2]});
//		await LayerxyFERwpu.unlock.call({from: accounts[1]});
//		const uintvmDtsue = await LayerxyFERwpu.withdraw.call(uintqP4eT0t, {from: accounts[4]});

		assert.equal(uintjx1n90k, BigInt("0"))
		await expect(LayerxyFERwpu.unlock.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressd7naFuQ = accounts[1]
		const LayerxT3AMtiq = await Layerx.new(addressd7naFuQ, {from: accounts[2]});
		const uint3B1mu7 = BigInt("320")
		const addressA4sSot = accounts[1]
		const addressyXcRTiR = accounts[4]
		const uintR8H9Oan = BigInt("695")
//		const boolmKzuhKi = await LayerxT3AMtiq.transferFrom.call(addressyXcRTiR, addressA4sSot, uint3B1mu7, {from: accounts[3]});
//		await LayerxT3AMtiq.addStakePayment.call({from: accounts[4]});
//		const uintuLo05jD = await LayerxT3AMtiq.lock.call(uintR8H9Oan, {from: accounts[4]});
//		await LayerxT3AMtiq.addStakePayment.call({from: accounts[1]});
//		await LayerxT3AMtiq.paused.call({from: accounts[1]});
//		await LayerxT3AMtiq.paused.call({from: accounts[2]});

		await expect(LayerxT3AMtiq.transferFrom.call(addressyXcRTiR, addressA4sSot, uint3B1mu7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressK2OB2HU = accounts[4]
		const LayerxJtoh0p = await Layerx.new(addressK2OB2HU, {from: accounts[4]});
		const uintYQhyBJd = BigInt("2037")
		const uintnlXrei0 = BigInt("356")
		const address9nrZOw = accounts[2]
//		const uint256RxiPDfU = await LayerxJtoh0p.burn.call(uintYQhyBJd, {from: "0x0000000000000000000000000000000000000001"});
//		const boolDzPU0p = await LayerxJtoh0p.transfer.call(address9nrZOw, uintnlXrei0, {from: accounts[2]});
//		await LayerxJtoh0p.unlock.call({from: accounts[3]});
//		await LayerxJtoh0p.onlyOwner.call({from: accounts[1]});

		await expect(LayerxJtoh0p.burn.call(uintYQhyBJd, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressBupYU1h = accounts[3]
		const Layerxnuhe4HY = await Layerx.new(addressBupYU1h, {from: "0x0000000000000000000000000000000000000001"});
		const addressamfj2k = accounts[3]
		const boolHhhZidZ = false
		const byteSidAb5 = "0x0a160e1317"
		const uintL7042Ff = BigInt("23")
		const addressUSJXGH = "0x0000000000000000000000000000000000000001"
		const addressBpfouEG = accounts[2]
		const uintE43wOBl = BigInt("1038")
		const addressZshKM2 = accounts[3]
		const addresszIARzy0 = await Layerxnuhe4HY.transferOwnership.call(addressamfj2k, {from: accounts[3]});
		const boolR4LRTI2 = await Layerxnuhe4HY.setIsPaused.call(boolHhhZidZ, {from: accounts[0]});
		const boolHPv7f5W = await Layerxnuhe4HY.approveAndCall.call(addressUSJXGH, uintL7042Ff, byteSidAb5, {from: accounts[1]});
		const uintp6ZqQLa = await Layerxnuhe4HY.balanceOf.call(addressBpfouEG, {from: accounts[0]});
		const boolydAvzMt = await Layerxnuhe4HY.approve.call(addressZshKM2, uintE43wOBl, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Layerx', async () => {
		const addresseNmYS00 = accounts[3]
		const Layerxmug2OSI = await Layerx.new(addresseNmYS00, {from: accounts[2]});
		const uint8VlwYC = BigInt("432")
		const boolUDrlUjP = false
		const uintF3cMNcA = BigInt("401")
		const addressW1DYecB = accounts[0]
		const addressyrKz9k = accounts[2]
		const addressQHsbXb2 = accounts[3]
//		const uintMI3Magt = await Layerxmug2OSI.exist.call(uint8VlwYC, {from: accounts[2]});
//		const boolN94YuG = await Layerxmug2OSI.setIsPaused.call(boolUDrlUjP, {from: accounts[3]});
//		const boolqw1HtaA = await Layerxmug2OSI.transferFrom.call(addressyrKz9k, addressW1DYecB, uintF3cMNcA, {from: accounts[1]});
//		const addresscyzs9hm = await Layerxmug2OSI.setNewStakeCreator.call(addressQHsbXb2, {from: accounts[2]});

		await expect(Layerxmug2OSI.exist.call(uint8VlwYC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressshmlfLT = accounts[2]
		const LayerxAoAJnnv = await Layerx.new(addressshmlfLT, {from: accounts[0]});
		const uintkkFo3Yj = BigInt("345")
		const uintjRCjyAF = BigInt("842")
		const uintyPGZFNh = BigInt("1229")
		const boolRXo4Evv = true
//		const uintZ6fQksS = await LayerxAoAJnnv.withdraw.call(uintkkFo3Yj, {from: accounts[4]});
//		const uintNU9W2Pz = await LayerxAoAJnnv.lock.call(uintjRCjyAF, {from: accounts[4]});
//		const uintoQB5t0 = await LayerxAoAJnnv.withdraw.call(uintyPGZFNh, {from: accounts[0]});
//		const boolwrdtehr = await LayerxAoAJnnv.setIsPaused.call(boolRXo4Evv, {from: accounts[3]});

		await expect(LayerxAoAJnnv.withdraw.call(uintkkFo3Yj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresszeINdTb = accounts[3]
		const LayerxbdkBO56 = await Layerx.new(addresszeINdTb, {from: accounts[5]});
		const addressUd0xfv8 = accounts[3]
		const addressVRqRa5Y = accounts[0]
		const uintVB9R7VN = await LayerxbdkBO56.totalSupply.call({from: accounts[1]});
		const uinteT513GH = await LayerxbdkBO56.balanceOf.call(addressUd0xfv8, {from: "0x0000000000000000000000000000000000000001"});
		const uintLJogZD6 = await LayerxbdkBO56.balanceOf.call(addressVRqRa5Y, {from: accounts[1]});

		assert.equal(uintLJogZD6, BigInt("0"))
		assert.equal(uintVB9R7VN, BigInt("40000000000000000000000"))
		assert.equal(uinteT513GH, BigInt("40000000000000000000000"))
	});

	it('test for Layerx', async () => {
		const addressec8AQ4l = accounts[3]
		const LayerxZf1QboE = await Layerx.new(addressec8AQ4l, {from: accounts[2]});
		const uintZIVa6BS = BigInt("1290")
		const addressBSZEO12 = accounts[1]
		const uintF9JhGvZ = BigInt("1948")
		const boolxHYX6K = await LayerxZf1QboE.approve.call(addressBSZEO12, uintZIVa6BS, {from: "0x0000000000000000000000000000000000000001"});
//		const uintVc9F1Bz = await LayerxZf1QboE.exist.call(uintF9JhGvZ, {from: accounts[1]});

		assert.equal(boolxHYX6K, true)
		await expect(LayerxZf1QboE.exist.call(uintF9JhGvZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressq5wjiK1 = accounts[1]
		const Layerxrh69CEI = await Layerx.new(addressq5wjiK1, {from: accounts[0]});
		const uintzdkxCH6 = BigInt("1752")
		const addressokFlF0q = accounts[0]
		const boolxC3j0bQ = false
//		const uintSP9POTQ = await Layerxrh69CEI.lock.call(uintzdkxCH6, {from: accounts[0]});
//		const addressN6vIo53 = await Layerxrh69CEI.transferOwnership.call(addressokFlF0q, {from: "0x0000000000000000000000000000000000000001"});
//		const boolv3AAUHw = await Layerxrh69CEI.setIsPaused.call(boolxC3j0bQ, {from: accounts[3]});
//		await Layerxrh69CEI.onlyOwner.call({from: accounts[3]});
//		await Layerxrh69CEI.unlock.call({from: accounts[3]});
//		const uintjXatvjP = await Layerxrh69CEI.totalSupply.call({from: accounts[1]});

		await expect(Layerxrh69CEI.lock.call(uintzdkxCH6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresskbuoTeX = accounts[5]
		const Layerxhug6ZeD = await Layerx.new(addresskbuoTeX, {from: accounts[5]});
		const byteZBCPloJ = "0x0c1e1c0a08081a00040b061f1f140d01121c0a00"
		const uintZs6Ji7N = BigInt("1738")
		const addressqxmB61L = accounts[5]
		const uintapsToZn = BigInt("1755")
		const addressE0Ndrv = "0x0000000000000000000000000000000000000001"
//		const boolBh22hgA = await Layerxhug6ZeD.approveAndCall.call(addressqxmB61L, uintZs6Ji7N, byteZBCPloJ, {from: accounts[1]});
//		const boolOtaOhCo = await Layerxhug6ZeD.approve.call(addressE0Ndrv, uintapsToZn, {from: accounts[0]});
//		await Layerxhug6ZeD.paused.call({from: accounts[2]});
//		await Layerxhug6ZeD.unlock.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(Layerxhug6ZeD.approveAndCall.call(addressqxmB61L, uintZs6Ji7N, byteZBCPloJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressugOl7ha = accounts[0]
		const Layerxa3rr5ao = await Layerx.new(addressugOl7ha, {from: accounts[1]});
		const uintbmlRAuL = BigInt("193")
		const addressfZtZNB = accounts[4]
		const byteMYPrC7 = "0x030005051c101403180310190613010e02050d0d0104"
		const uint4Ggq3I = BigInt("607")
		const addressVFQVmLh = accounts[0]
		const uinteCmf7iw = await Layerxa3rr5ao.getStakesNum.call({from: accounts[3]});
		const boolkyzRY78 = await Layerxa3rr5ao.approve.call(addressfZtZNB, uintbmlRAuL, {from: "0x0000000000000000000000000000000000000001"});
//		const boolpvRAe7c = await Layerxa3rr5ao.approveAndCall.call(addressVFQVmLh, uint4Ggq3I, byteMYPrC7, {from: accounts[1]});
//		const uinthYuFSQU = await Layerxa3rr5ao.totalSupply.call({from: accounts[5]});

		assert.equal(boolkyzRY78, true)
		assert.equal(uinteCmf7iw, BigInt("1"))
		await expect(Layerxa3rr5ao.approveAndCall.call(addressVFQVmLh, uint4Ggq3I, byteMYPrC7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressG40ldnz = accounts[4]
		const LayerxIWUPoYc = await Layerx.new(addressG40ldnz, {from: accounts[3]});
		const uintdCsA9Wk = BigInt("1679")
		const addressvfeJel = accounts[5]
//		const boolZpt0FD = await LayerxIWUPoYc.transfer.call(addressvfeJel, uintdCsA9Wk, {from: accounts[5]});
//		const uinteJiS952 = await LayerxIWUPoYc.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintwflKg5U = await LayerxIWUPoYc.getStakesNum.call({from: accounts[5]});

		await expect(LayerxIWUPoYc.transfer.call(addressvfeJel, uintdCsA9Wk, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressMdjVU0 = accounts[0]
		const LayerxafYDWVg = await Layerx.new(addressMdjVU0, {from: accounts[0]});
		const addressWJPtGCR = accounts[3]
		const uinto56lWR4 = BigInt("1071")
		const addressIvn1HKC = accounts[2]
		const uintGNbkCT = BigInt("892")
		const addressp9TSe4k = accounts[4]
		const byteWTODrb = "0x0d10"
		const uintufPs4L5 = BigInt("1214")
		const addressiaXE1pZ = accounts[4]
		const uintjhq8GZS = BigInt("417")
		const uintsgKIExD = BigInt("519")
		const addressRyEblhZ = await LayerxafYDWVg.setNewStakeCreator.call(addressWJPtGCR, {from: accounts[0]});
		const boolczLSyTe = await LayerxafYDWVg.approve.call(addressIvn1HKC, uinto56lWR4, {from: accounts[3]});
		const boolP3QLa5J = await LayerxafYDWVg.approve.call(addressp9TSe4k, uintGNbkCT, {from: accounts[3]});
//		const boolDQIObwe = await LayerxafYDWVg.approveAndCall.call(addressiaXE1pZ, uintufPs4L5, byteWTODrb, {from: accounts[4]});
//		const uint256d6IpZWt = await LayerxafYDWVg.burn.call(uintjhq8GZS, {from: accounts[5]});
//		const uintxQywoyG = await LayerxafYDWVg.lock.call(uintsgKIExD, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolP3QLa5J, true)
		assert.equal(boolczLSyTe, true)
		await expect(LayerxafYDWVg.approveAndCall.call(addressiaXE1pZ, uintufPs4L5, byteWTODrb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const address5ZLQhx = accounts[2]
		const LayerxfRJiASk = await Layerx.new(address5ZLQhx, {from: accounts[4]});
		const addressBfwrGNu = accounts[1]
		const addressJYguips = accounts[4]
		const addresssTGbYi7 = "0x0000000000000000000000000000000000000001"
//		await LayerxfRJiASk.addStakePayment.call({from: accounts[2]});
//		const uintd476qvv = await LayerxfRJiASk.allowance.call(addressJYguips, addressBfwrGNu, {from: accounts[1]});
//		const addressFpZImkz = await LayerxfRJiASk.transferOwnership.call(addresssTGbYi7, {from: accounts[4]});

		await expect(LayerxfRJiASk.addStakePayment.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresswfLrhkf = accounts[5]
		const LayerxqI8vzgW = await Layerx.new(addresswfLrhkf, {from: accounts[5]});
		const uintJW1B3I7 = BigInt("1256")
		const addressp1cAQFT = accounts[4]
		const boolie3IfyR = true
		const uintImHe4Eu = BigInt("1056")
		const boolAol751a = await LayerxqI8vzgW.approve.call(addressp1cAQFT, uintJW1B3I7, {from: accounts[4]});
		const boolM3xGdT6 = await LayerxqI8vzgW.setIsPaused.call(boolie3IfyR, {from: accounts[5]});
//		const uinth3SkkfT = await LayerxqI8vzgW.exist.call(uintImHe4Eu, {from: accounts[1]});

		assert.equal(boolAol751a, true)
		await expect(LayerxqI8vzgW.exist.call(uintImHe4Eu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressKjn0Bu3 = accounts[3]
		const LayerxZ3e79NZ = await Layerx.new(addressKjn0Bu3, {from: accounts[0]});
		const addresssxMEIwa = "0x0000000000000000000000000000000000000001"
		const uintp5mhGeM = BigInt("1374")
		const addressfK1xf2P = accounts[3]
		const addresseyTeCZ7 = await LayerxZ3e79NZ.transferOwnership.call(addresssxMEIwa, {from: accounts[3]});
		const boolbfuoSzx = await LayerxZ3e79NZ.approve.call(addressfK1xf2P, uintp5mhGeM, {from: accounts[1]});

		assert.equal(boolbfuoSzx, true)
	});

	it('test for Layerx', async () => {
		const addressVG7GqA8 = accounts[2]
		const LayerxfRJiASk = await Layerx.new(addressVG7GqA8, {from: accounts[4]});
		const uinttjrNE1u = BigInt("71")
//		await LayerxfRJiASk.addStakePayment.call({from: accounts[2]});
//		const uint256JasVNk = await LayerxfRJiASk.burn.call(uinttjrNE1u, {from: accounts[2]});

		await expect(LayerxfRJiASk.addStakePayment.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})