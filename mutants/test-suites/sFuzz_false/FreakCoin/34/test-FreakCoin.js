const FreakCoin = artifacts.require("FreakCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FreakCoin', (accounts) => {
	it('test for FreakCoin', async () => {
		const FreakCoinVTK4Q1 = await FreakCoin.new({from: accounts[3]});
		const uintn7jlUk = BigInt("188")
		const addressXzPAums = accounts[4]
		const uintFqBgGRm = BigInt("980")
		const addressG8qZxwp = accounts[2]
		const boolernD4yp = await FreakCoinVTK4Q1.approve.call(addressXzPAums, uintn7jlUk, {from: accounts[1]});
		const boold1cWA31 = await FreakCoinVTK4Q1.approve.call(addressG8qZxwp, uintFqBgGRm, {from: accounts[4]});

		assert.equal(boold1cWA31, true)
		assert.equal(boolernD4yp, true)
	});

	it('test for FreakCoin', async () => {
		const FreakCoinz1Gzz3d = await FreakCoin.new({from: accounts[4]});
		const addressJsSoVWc = accounts[3]
		const addresssAdQazN = accounts[1]
		const addressTkeaUGi = accounts[0]
		const addressUMEmz8Y = accounts[1]
		const addressuv5IZQ = "0x0000000000000000000000000000000000000001"
//		const uint256hxI9lzs = await FreakCoinz1Gzz3d.allUserBalances.call(addressJsSoVWc, {from: accounts[0]});
//		const uint256VYkt7BW = await FreakCoinz1Gzz3d.allowance.call(addressTkeaUGi, addresssAdQazN, {from: accounts[0]});
//		const uint256dtvosq4 = await FreakCoinz1Gzz3d.allowance.call(addressuv5IZQ, addressUMEmz8Y, {from: accounts[0]});

		await expect(FreakCoinz1Gzz3d.allUserBalances.call(addressJsSoVWc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinxIWK0Eb = await FreakCoin.new({from: accounts[5]});
		const uintOYMPM6h = BigInt("844")
		const addresspLa9jvq = accounts[4]
		const addressCCNqg1w = accounts[4]
		const addressSnKZO6A = accounts[0]
//		const boolHMhxSr4 = await FreakCoinxIWK0Eb.transferFrom.call(addressCCNqg1w, addresspLa9jvq, uintOYMPM6h, {from: accounts[5]});
//		const uint256gYCoxb4 = await FreakCoinxIWK0Eb.allUserBalances.call(addressSnKZO6A, {from: accounts[0]});
//		const addressO1IZk9G = await FreakCoinxIWK0Eb.uniswapAddress.call({from: accounts[2]});
//		const addressL2e0t6b = await FreakCoinxIWK0Eb.uniswapAddress.call({from: accounts[1]});

		await expect(FreakCoinxIWK0Eb.transferFrom.call(addressCCNqg1w, addresspLa9jvq, uintOYMPM6h, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinTopCnZT = await FreakCoin.new({from: accounts[2]});
		const addressJ4CiDU = accounts[2]
		const addressuchEs8k = accounts[2]
		const uinteQ1K8NG = BigInt("692")
		const addressAsN59AD = accounts[4]
		const uint256tlSCEfk = await FreakCoinTopCnZT.balanceOf.call(addressJ4CiDU, {from: accounts[5]});
		const addressy06eDHb = await FreakCoinTopCnZT.uniswapAddress.call({from: accounts[0]});
		const uint256dvrpGrh = await FreakCoinTopCnZT.balanceOf.call(addressuchEs8k, {from: accounts[0]});
		const booloyg7aXf = await FreakCoinTopCnZT.approve.call(addressAsN59AD, uinteQ1K8NG, {from: accounts[0]});

		assert.equal(addressy06eDHb, 0x0000000000000000000000000000000000000000)
		assert.equal(booloyg7aXf, true)
		assert.equal(uint256dvrpGrh, BigInt("1000000"))
		assert.equal(uint256tlSCEfk, BigInt("1000000"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoin23oVIJ = await FreakCoin.new({from: accounts[4]});
		const uintZZF5eVv = BigInt("520")
		const addressjdLmJpo = accounts[2]
		const addressnAZsdok = accounts[0]
		const addressHEavQZn = accounts[4]
		const addressB7FbWcE = accounts[4]
		const boole2tNwwj = await FreakCoin23oVIJ.approve.call(addressjdLmJpo, uintZZF5eVv, {from: accounts[2]});
//		const addressT5kWeYr = await FreakCoin23oVIJ.setUniswapAddress.call(addressnAZsdok, {from: accounts[0]});
//		const addressUUs8iTW = await FreakCoin23oVIJ.setUniswapAddress.call(addressHEavQZn, {from: accounts[4]});
//		const uint256gPLr6tf = await FreakCoin23oVIJ.balanceOf.call(addressB7FbWcE, {from: accounts[1]});
//		const addressqRj1ej = await FreakCoin23oVIJ.uniswapAddress.call({from: accounts[2]});

		assert.equal(boole2tNwwj, true)
		await expect(FreakCoin23oVIJ.setUniswapAddress.call(addressnAZsdok, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinFjTemn = await FreakCoin.new({from: accounts[3]});
		const addressnylGhQ4 = accounts[4]
		const uintsTngp2m = BigInt("1433")
		const addressaOWy4id = accounts[5]
		const addressTDScQ4v = accounts[0]
		const uintemUo7rP = BigInt("1506")
		const addressbjWA8GV = accounts[0]
		const uint256JsnAe0G = await FreakCoinFjTemn.balanceOf.call(addressnylGhQ4, {from: accounts[4]});
//		const booljiRb6T = await FreakCoinFjTemn.transfer.call(addressaOWy4id, uintsTngp2m, {from: accounts[2]});
//		const uint256U0FGhPH = await FreakCoinFjTemn.allUserBalances.call(addressTDScQ4v, {from: accounts[4]});
//		const boolIkGGpsK = await FreakCoinFjTemn.transfer.call(addressbjWA8GV, uintemUo7rP, {from: accounts[0]});

		assert.equal(uint256JsnAe0G, BigInt("0"))
		await expect(FreakCoinFjTemn.transfer.call(addressaOWy4id, uintsTngp2m, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinFjTemn = await FreakCoin.new({from: accounts[3]});
		const addressywYsbvj = accounts[1]
		const addressIE7TZsD = accounts[1]
		const addressvfx7FEr = accounts[5]
		const uintPAh1Y0L = BigInt("1433")
		const addressUox6byQ = accounts[5]
		const address5tpAKw = accounts[0]
		const uintGg5gdC1 = BigInt("1506")
		const addressrBX1r6r = accounts[0]
		const uint256EYoA5FY = await FreakCoinFjTemn.allowance.call(addressIE7TZsD, addressywYsbvj, {from: "0x0000000000000000000000000000000000000001"});
		const uint256JsnAe0G = await FreakCoinFjTemn.balanceOf.call(addressvfx7FEr, {from: accounts[4]});
//		const booljiRb6T = await FreakCoinFjTemn.transfer.call(addressUox6byQ, uintPAh1Y0L, {from: accounts[2]});
//		const uint256U0FGhPH = await FreakCoinFjTemn.allUserBalances.call(address5tpAKw, {from: accounts[4]});
//		const boolIkGGpsK = await FreakCoinFjTemn.transfer.call(addressrBX1r6r, uintGg5gdC1, {from: accounts[0]});

		assert.equal(uint256EYoA5FY, BigInt("0"))
		assert.equal(uint256JsnAe0G, BigInt("0"))
		await expect(FreakCoinFjTemn.transfer.call(addressUox6byQ, uintPAh1Y0L, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinVWedWRW = await FreakCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const addresslsdm0f6 = accounts[4]
		const addressKn7SrQW = accounts[4]
		const uintOYHJQyC = BigInt("405")
		const addressGHOvcKq = accounts[3]
		const addresstocyHpl = await FreakCoinVWedWRW.uniswapAddress.call({from: "0x0000000000000000000000000000000000000001"});
		const addressr7TjKWH = await FreakCoinVWedWRW.setUniswapAddress.call(addresslsdm0f6, {from: "0x0000000000000000000000000000000000000001"});
		const addresss6ZQqtY = await FreakCoinVWedWRW.uniswapAddress.call({from: accounts[1]});
		const uint256TCZsR5H = await FreakCoinVWedWRW.allUserBalances.call(addressKn7SrQW, {from: accounts[3]});
		const boolauTPOOb = await FreakCoinVWedWRW.transfer.call(addressGHOvcKq, uintOYHJQyC, {from: accounts[0]});
	});

	it('test for FreakCoin', async () => {
		const FreakCoinVTK4Q1 = await FreakCoin.new({from: accounts[3]});
		const uintC8J9vtk = BigInt("1565")
		const addressvLf6l9W = accounts[0]
		const uintIgypa28 = BigInt("542")
		const addressvEmX99G = accounts[4]
		const boolU5M3Ji6 = await FreakCoinVTK4Q1.transfer.call(addressvLf6l9W, uintC8J9vtk, {from: accounts[3]});
		const boolernD4yp = await FreakCoinVTK4Q1.approve.call(addressvEmX99G, uintIgypa28, {from: accounts[1]});

		assert.equal(boolU5M3Ji6, true)
		assert.equal(boolernD4yp, true)
	});

	it('test for FreakCoin', async () => {
		const FreakCoinHWkGsuS = await FreakCoin.new({from: accounts[1]});
		const uintvFbszte = BigInt("1869")
		const addressKBMyeXP = accounts[1]
		const uintT1lE6A5 = BigInt("1223")
		const addressdpodK1 = accounts[1]
		const uintPmxcZOv = BigInt("166")
		const addressOXx9yzL = accounts[2]
		const boolrelRE5 = await FreakCoinHWkGsuS.transfer.call(addressKBMyeXP, uintvFbszte, {from: accounts[1]});
//		const boolr6WSj5y = await FreakCoinHWkGsuS.transfer.call(addressdpodK1, uintT1lE6A5, {from: accounts[4]});
//		const boolLhtHkT3 = await FreakCoinHWkGsuS.approve.call(addressOXx9yzL, uintPmxcZOv, {from: accounts[0]});
//		const addresshLEvdwQ = await FreakCoinHWkGsuS.uniswapAddress.call({from: accounts[1]});

		assert.equal(boolrelRE5, true)
		await expect(FreakCoinHWkGsuS.transfer.call(addressdpodK1, uintT1lE6A5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})