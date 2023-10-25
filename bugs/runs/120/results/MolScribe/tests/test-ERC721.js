const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractt1wDM3 = await ERC721.new({from: accounts[0]});
		const _datayw8oyqU = "0x0b0e05011b0b201107161d02121d1c120b1f1420141302081719"
		const tokenIdINHq7qS = BigInt("827")
		const toxnc7sCz = accounts[1]
		const fromJLKunm1 = accounts[4]
		const tokenIdl4H2wAL = BigInt("278")
		const toiIIQCOY = accounts[2]
		const fromZz8aRsx = accounts[2]
		const tokenIdi8tOw0O = BigInt("21")
		await contractt1wDM3.safeTransferFrom.call(fromJLKunm1, toxnc7sCz, tokenIdINHq7qS, _datayw8oyqU, {from: accounts[0]});
		await contractt1wDM3.safeTransferFrom.call(fromZz8aRsx, toiIIQCOY, tokenIdl4H2wAL, {from: "0x0000000000000000000000000000000000000001"});
		const nullyAI1F1A = await contractt1wDM3.ownerOf.call(tokenIdi8tOw0O, {from: accounts[5]});

		await expect(contractt1wDM3.safeTransferFrom.call(fromJLKunm1, toxnc7sCz, tokenIdINHq7qS, _datayw8oyqU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractB4KAbS = await ERC721.new({from: accounts[2]});
		const operatorA5ePCYQ = accounts[3]
		const ownerKwxDDe3 = accounts[3]
		const tokenIdhby9t8b = BigInt("1084")
		const tokenIdWzfVYx = BigInt("1540")
		const toXU2c25 = accounts[4]
		const fromePZXELS = accounts[0]
		const tokenIdY7Y0q1k = BigInt("1798")
		const to98gKpR = accounts[4]
		const fromtkov9qo = accounts[3]
		const tokenIdkhIMeDn = BigInt("1768")
		const tocAMpxmX = accounts[3]
		const fromXAetj08 = accounts[4]
		const nullOE8FyL3 = await contractB4KAbS.isApprovedForAll.call(ownerKwxDDe3, operatorA5ePCYQ, {from: accounts[2]});
		const nulltyzoM2N = await contractB4KAbS.getApproved.call(tokenIdhby9t8b, {from: accounts[5]});
		await contractB4KAbS.safeTransferFrom.call(fromePZXELS, toXU2c25, tokenIdWzfVYx, {from: accounts[0]});
		await contractB4KAbS.safeTransferFrom.call(fromtkov9qo, to98gKpR, tokenIdY7Y0q1k, {from: accounts[1]});
		await contractB4KAbS.transferFrom.call(fromXAetj08, tocAMpxmX, tokenIdkhIMeDn, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullOE8FyL3, false)
		await expect(contractB4KAbS.getApproved.call(tokenIdhby9t8b, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractqA66aUy = await ERC721.new({from: accounts[0]});
		const tokenIdVqXA8dr = BigInt("1878")
		const tokenIdTINTyic = BigInt("483")
		const tokenId8A5xT3 = BigInt("413")
		const tokenIdyYdW4x7 = BigInt("923")
		const tokenIdcFXoj9e = BigInt("937")
		const towO69ch2 = accounts[0]
		const fromhAs7raC = accounts[3]
		const null3lM7D3 = await contractqA66aUy.ownerOf.call(tokenIdVqXA8dr, {from: accounts[0]});
		const nullhL0U68u = await contractqA66aUy.ownerOf.call(tokenIdTINTyic, {from: accounts[0]});
		const nullwWCMnMU = await contractqA66aUy.ownerOf.call(tokenId8A5xT3, {from: "0x0000000000000000000000000000000000000001"});
		const nullu2rjyht = await contractqA66aUy.getApproved.call(tokenIdyYdW4x7, {from: accounts[2]});
		await contractqA66aUy.safeTransferFrom.call(fromhAs7raC, towO69ch2, tokenIdcFXoj9e, {from: accounts[2]});

		await expect(contractqA66aUy.ownerOf.call(tokenIdVqXA8dr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractPDxwuRw = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const operatorTJUNnfG = "0x0000000000000000000000000000000000000001"
		const ownerZRoG3tR = accounts[0]
		const tokenIdD6BkNR4 = BigInt("155")
		const toxy6ppJ = accounts[2]
		const fromo6MDnN5 = accounts[0]
		const tokenIddiOiR3N = BigInt("503")
		const tokenIdUDaLoc1 = BigInt("1480")
		const to5Ld1NJ = accounts[1]
		const fromkPb209t = accounts[3]
		const nulliDrjeVU = await contractPDxwuRw.isApprovedForAll.call(ownerZRoG3tR, operatorTJUNnfG, {from: accounts[4]});
		await contractPDxwuRw.safeTransferFrom.call(fromo6MDnN5, toxy6ppJ, tokenIdD6BkNR4, {from: accounts[3]});
		const nullKXLpVDH = await contractPDxwuRw.ownerOf.call(tokenIddiOiR3N, {from: accounts[0]});
		await contractPDxwuRw.safeTransferFrom.call(fromkPb209t, to5Ld1NJ, tokenIdUDaLoc1, {from: accounts[1]});
	});

	it('test for ERC721', async () => {
		const contractZGd7hvd = await ERC721.new({from: accounts[1]});
		const approvedXcI6H7K = true
		const towHy12XJ = accounts[2]
		const tokenIdHMGhMqj = BigInt("358")
		const toGxqq7q = accounts[0]
		const fromxIHXIsM = accounts[1]
		const tokenIdN3aJ2vg = BigInt("372")
		const toeOoOXEf = accounts[4]
		const approvedLqyHZBC = true
		const toyr4Gh7g = accounts[5]
		const tokenIdy1VNSZq = BigInt("254")
		const tozg6qCM6 = accounts[1]
		await contractZGd7hvd.setApprovalForAll.call(towHy12XJ, approvedXcI6H7K, {from: accounts[2]});
		await contractZGd7hvd.transferFrom.call(fromxIHXIsM, toGxqq7q, tokenIdHMGhMqj, {from: accounts[4]});
		await contractZGd7hvd.approve.call(toeOoOXEf, tokenIdN3aJ2vg, {from: accounts[0]});
		await contractZGd7hvd.setApprovalForAll.call(toyr4Gh7g, approvedLqyHZBC, {from: accounts[3]});
		await contractZGd7hvd.approve.call(tozg6qCM6, tokenIdy1VNSZq, {from: accounts[0]});

		await expect(contractZGd7hvd.setApprovalForAll.call(towHy12XJ, approvedXcI6H7K, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})