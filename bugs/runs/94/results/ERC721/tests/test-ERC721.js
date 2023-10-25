const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractFigxdrf = await ERC721.new({from: accounts[3]});
		const tokenIdbic5PWi = BigInt("673")
		const tor7oejJZ = accounts[0]
		const fromH2W9h8A = accounts[3]
		const operatorDn7QSag = accounts[5]
		const ownerkKOfH5E = "0x0000000000000000000000000000000000000001"
		const ownertBj6jSV = accounts[2]
		const tokenIdMB3WNRO = BigInt("1331")
		const toZgCwPVh = accounts[4]
		const _datar77F0SC = "0x18080a1e"
		const tokenIdDT9Wnx = BigInt("992")
		const toWu414r = accounts[0]
		const fromvKyGFGy = accounts[2]
		await contractFigxdrf.safeTransferFrom.call(fromH2W9h8A, tor7oejJZ, tokenIdbic5PWi, {from: accounts[2]});
		const nulleUdPOHI = await contractFigxdrf.isApprovedForAll.call(ownerkKOfH5E, operatorDn7QSag, {from: accounts[2]});
		const nullfgGNTPc = await contractFigxdrf.balanceOf.call(ownertBj6jSV, {from: accounts[2]});
		await contractFigxdrf.approve.call(toZgCwPVh, tokenIdMB3WNRO, {from: accounts[3]});
		await contractFigxdrf.safeTransferFrom.call(fromvKyGFGy, toWu414r, tokenIdDT9Wnx, _datar77F0SC, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractFigxdrf.safeTransferFrom.call(fromH2W9h8A, tor7oejJZ, tokenIdbic5PWi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractIqpQPvx = await ERC721.new({from: accounts[3]});
		const tokenIdoJtlJxY = BigInt("1577")
		const tokenIdUozwzP7 = BigInt("1662")
		const tokenIdnwG2Rbk = BigInt("877")
		const tokenIdaDrxXN6 = BigInt("204")
		const toNADe02L = accounts[2]
		const fromcHaQETu = accounts[4]
		const nullDihtjc = await contractIqpQPvx.ownerOf.call(tokenIdoJtlJxY, {from: accounts[0]});
		const nullbyDaxa = await contractIqpQPvx.getApproved.call(tokenIdUozwzP7, {from: accounts[1]});
		const nulldBWUhM8 = await contractIqpQPvx.ownerOf.call(tokenIdnwG2Rbk, {from: accounts[5]});
		await contractIqpQPvx.safeTransferFrom.call(fromcHaQETu, toNADe02L, tokenIdaDrxXN6, {from: accounts[0]});

		await expect(contractIqpQPvx.ownerOf.call(tokenIdoJtlJxY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractBD8QOdP = await ERC721.new({from: accounts[1]});
		const tokenIdgUfIzm8 = BigInt("45")
		const tokenIdPRwfYBC = BigInt("1943")
		const tovhGbY6G = accounts[0]
		const fromV0PMTBa = accounts[4]
		const ownerYHaPq9t = accounts[1]
		const ownerR2e0LVV = accounts[3]
		const null8FONgv = await contractBD8QOdP.getApproved.call(tokenIdgUfIzm8, {from: accounts[3]});
		await contractBD8QOdP.transferFrom.call(fromV0PMTBa, tovhGbY6G, tokenIdPRwfYBC, {from: accounts[1]});
		const nulldHy8r7h = await contractBD8QOdP.balanceOf.call(ownerYHaPq9t, {from: accounts[0]});
		const nullSxbNg5 = await contractBD8QOdP.balanceOf.call(ownerR2e0LVV, {from: accounts[4]});

		await expect(contractBD8QOdP.getApproved.call(tokenIdgUfIzm8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractz17hmf2 = await ERC721.new({from: accounts[5]});
		const tokenIdboO3xP3 = BigInt("1335")
		const toPvXXTfh = accounts[1]
		const fromFUYwECw = "0x0000000000000000000000000000000000000001"
		const ownerWDOMVuY = accounts[4]
		const _dataG1qZ3H2 = "0x03050315041507001a061d"
		const tokenIdzCyB5f = BigInt("1869")
		const toMqEZKnu = accounts[5]
		const fromBPG6aS = accounts[3]
		const operatorFhCpiOC = accounts[5]
		const ownerpuNSpBK = accounts[1]
		await contractz17hmf2.transferFrom.call(fromFUYwECw, toPvXXTfh, tokenIdboO3xP3, {from: accounts[3]});
		const nullpI0ztft = await contractz17hmf2.balanceOf.call(ownerWDOMVuY, {from: accounts[3]});
		await contractz17hmf2.safeTransferFrom.call(fromBPG6aS, toMqEZKnu, tokenIdzCyB5f, _dataG1qZ3H2, {from: accounts[2]});
		const nullWQKx5ZP = await contractz17hmf2.isApprovedForAll.call(ownerpuNSpBK, operatorFhCpiOC, {from: accounts[4]});

		await expect(contractz17hmf2.transferFrom.call(fromFUYwECw, toPvXXTfh, tokenIdboO3xP3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractEfqWcXv = await ERC721.new({from: accounts[0]});
		const ownerGAzhG31 = accounts[0]
		const tokenIdTS32RK7 = BigInt("1240")
		const toiH9Pkmn = accounts[3]
		const fromNsdixgh = accounts[0]
		const tokenId7wwe7c = BigInt("1475")
		const toHvOf57Q = accounts[4]
		const fromCDf7ifk = accounts[2]
		const nullrNzZNVX = await contractEfqWcXv.balanceOf.call(ownerGAzhG31, {from: "0x0000000000000000000000000000000000000001"});
		await contractEfqWcXv.transferFrom.call(fromNsdixgh, toiH9Pkmn, tokenIdTS32RK7, {from: "0x0000000000000000000000000000000000000001"});
		await contractEfqWcXv.safeTransferFrom.call(fromCDf7ifk, toHvOf57Q, tokenId7wwe7c, {from: accounts[1]});

		assert.equal(nullrNzZNVX, 0)
		await expect(contractEfqWcXv.transferFrom.call(fromNsdixgh, toiH9Pkmn, tokenIdTS32RK7, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractUH1TTP9 = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdqYBXfB = BigInt("332")
		const toBZGcsSn = accounts[1]
		const fromYFbzWs = accounts[0]
		const tokenIdVWPamzs = BigInt("1915")
		const tobUaany = accounts[0]
		const fromXw3opHh = accounts[2]
		const tokenIdumX36xR = BigInt("972")
		const operatorYEwKpt = accounts[0]
		const ownerPI63RCr = accounts[0]
		const tokenIdt5TOn9 = BigInt("607")
		const toAxwwfV6 = accounts[3]
		const fromxMtHFEN = accounts[2]
		await contractUH1TTP9.transferFrom.call(fromYFbzWs, toBZGcsSn, tokenIdqYBXfB, {from: accounts[2]});
		await contractUH1TTP9.safeTransferFrom.call(fromXw3opHh, tobUaany, tokenIdVWPamzs, {from: accounts[3]});
		const nullXNaigXc = await contractUH1TTP9.ownerOf.call(tokenIdumX36xR, {from: accounts[5]});
		const nullRbfp0l = await contractUH1TTP9.isApprovedForAll.call(ownerPI63RCr, operatorYEwKpt, {from: accounts[0]});
		await contractUH1TTP9.transferFrom.call(fromxMtHFEN, toAxwwfV6, tokenIdt5TOn9, {from: accounts[4]});
	});

	it('test for ERC721', async () => {
		const contractRyXSU3S = await ERC721.new({from: accounts[3]});
		const operatorGcptgnQ = "0x0000000000000000000000000000000000000001"
		const ownerD4BkDG8 = accounts[1]
		const tokenIdBlpy73s = BigInt("1577")
		const tokenIdKU01yq8 = BigInt("1662")
		const tokenIdTHxat8 = BigInt("1576")
		const toYTUunrj = accounts[1]
		const fromTLCdohn = accounts[3]
		const tokenIdNDGGK9 = BigInt("1036")
		const tokenIdo3GmNa = BigInt("877")
		const tokenIdYLj9m2 = BigInt("204")
		const toxzzeyjZ = accounts[2]
		const fromrCLZNVg = accounts[4]
		const nulltHghvP0 = await contractRyXSU3S.isApprovedForAll.call(ownerD4BkDG8, operatorGcptgnQ, {from: accounts[5]});
		const nullf7Bied = await contractRyXSU3S.ownerOf.call(tokenIdBlpy73s, {from: accounts[0]});
		const nullKI1DyWm = await contractRyXSU3S.getApproved.call(tokenIdKU01yq8, {from: accounts[1]});
		await contractRyXSU3S.transferFrom.call(fromTLCdohn, toYTUunrj, tokenIdTHxat8, {from: accounts[5]});
		const nullZ33zr0f = await contractRyXSU3S.getApproved.call(tokenIdNDGGK9, {from: accounts[2]});
		const nulllRiI0VO = await contractRyXSU3S.ownerOf.call(tokenIdo3GmNa, {from: accounts[5]});
		await contractRyXSU3S.safeTransferFrom.call(fromrCLZNVg, toxzzeyjZ, tokenIdYLj9m2, {from: accounts[0]});

		assert.equal(nulltHghvP0, false)
		await expect(contractRyXSU3S.ownerOf.call(tokenIdBlpy73s, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractbL2y1jI = await ERC721.new({from: accounts[0]});
		const approvedYSOBF1 = false
		const toie799Xt = accounts[1]
		const ownerYicmts = accounts[0]
		const tokenIdNpRTYEQ = BigInt("132")
		const tokenIdZcneAil = BigInt("1240")
		const toxuULaYH = accounts[3]
		const frome4N24FP = accounts[0]
		const tokenIdUBe0hBZ = BigInt("1475")
		const toFDhsOGU = accounts[4]
		const frompvYORlL = accounts[2]
		await contractbL2y1jI.setApprovalForAll.call(toie799Xt, approvedYSOBF1, {from: accounts[2]});
		const nullTIztsQ = await contractbL2y1jI.balanceOf.call(ownerYicmts, {from: "0x0000000000000000000000000000000000000001"});
		const null5HD8Lw = await contractbL2y1jI.getApproved.call(tokenIdNpRTYEQ, {from: accounts[5]});
		await contractbL2y1jI.transferFrom.call(frome4N24FP, toxuULaYH, tokenIdZcneAil, {from: "0x0000000000000000000000000000000000000001"});
		await contractbL2y1jI.safeTransferFrom.call(frompvYORlL, toFDhsOGU, tokenIdUBe0hBZ, {from: accounts[1]});

		assert.equal(nullTIztsQ, 0)
		await expect(contractbL2y1jI.balanceOf.call(ownerYicmts, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractL1JlDdG = await ERC721.new({from: accounts[1]});
		const operatormtqe6i = "0x0000000000000000000000000000000000000001"
		const owneruoneEV3 = accounts[2]
		const tokenIdl4hpAKC = BigInt("1951")
		const toT0PDLpf = "0x0000000000000000000000000000000000000001"
		const tokenIdx0U8GPQ = BigInt("1883")
		const nullrXtyevA = await contractL1JlDdG.isApprovedForAll.call(owneruoneEV3, operatormtqe6i, {from: accounts[4]});
		await contractL1JlDdG.approve.call(toT0PDLpf, tokenIdl4hpAKC, {from: accounts[1]});
		const nullGG9KKn = await contractL1JlDdG.ownerOf.call(tokenIdx0U8GPQ, {from: accounts[3]});

		assert.equal(nullrXtyevA, false)
		await expect(contractL1JlDdG.approve.call(toT0PDLpf, tokenIdl4hpAKC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractgSu1sV9 = await ERC721.new({from: accounts[2]});
		const owner1LzQPY = accounts[3]
		const approved3nsEzB = true
		const toJlug8To = accounts[2]
		const tokenIdyKm8jYv = BigInt("620")
		const toJf2foWE = accounts[0]
		const fromO5on3jj = accounts[4]
		const tokenIdHxE1uSZ = BigInt("1777")
		const toNgHYD1U = accounts[2]
		const tokenIdHPnMfYO = BigInt("1998")
		const nullhbBVnIX = await contractgSu1sV9.balanceOf.call(owner1LzQPY, {from: accounts[4]});
		await contractgSu1sV9.setApprovalForAll.call(toJlug8To, approved3nsEzB, {from: accounts[2]});
		await contractgSu1sV9.safeTransferFrom.call(fromO5on3jj, toJf2foWE, tokenIdyKm8jYv, {from: accounts[4]});
		await contractgSu1sV9.approve.call(toNgHYD1U, tokenIdHxE1uSZ, {from: accounts[1]});
		const nullAq4BMZy = await contractgSu1sV9.ownerOf.call(tokenIdHPnMfYO, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullhbBVnIX, 0)
		await expect(contractgSu1sV9.setApprovalForAll.call(toJlug8To, approved3nsEzB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})