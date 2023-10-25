const DatrixoEquityToken = artifacts.require("DatrixoEquityToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DatrixoEquityToken', (accounts) => {
	it('test for DatrixoEquityToken', async () => {
		const addressYeicsVN = accounts[4]
		const uintaHrjIic = BigInt("602")
		const DatrixoEquityTokenvoUeqC = await DatrixoEquityToken.new(addressYeicsVN, uintaHrjIic, {from: accounts[2]});
		const addressUEQqZrb = accounts[0]
		const uintdElC6c = BigInt("1602")
		const addressxgIx140 = accounts[3]
		const addressJEnaJ9Q = "0x0000000000000000000000000000000000000001"
		const boolVnQVlhC = await DatrixoEquityTokenvoUeqC.removeShareholder.call(addressUEQqZrb, {from: accounts[5]});
		await DatrixoEquityTokenvoUeqC.onlyOwner.call({from: accounts[4]});
		const boolyRPlGrZ = await DatrixoEquityTokenvoUeqC.transferFrom.call(addressJEnaJ9Q, addressxgIx140, uintdElC6c, {from: accounts[0]});

		await expect(DatrixoEquityTokenvoUeqC.removeShareholder.call(addressUEQqZrb, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresslUOFcEU = accounts[1]
		const uintfx7Kadz = BigInt("1023")
		const DatrixoEquityTokenI6UyeNs = await DatrixoEquityToken.new(addresslUOFcEU, uintfx7Kadz, {from: accounts[2]});
		const uintPz81FMm = BigInt("653")
		const addresshwOsiuD = accounts[2]
		const addressHVdbqvc = accounts[4]
		const uint3OVn6l = BigInt("635")
		const addressXr7suxb = accounts[1]
		await DatrixoEquityTokenI6UyeNs.afterStartTime.call({from: accounts[3]});
		const boolW8yPp4D = await DatrixoEquityTokenI6UyeNs.transferFrom.call(addressHVdbqvc, addresshwOsiuD, uintPz81FMm, {from: accounts[0]});
		const boolVafyWCb = await DatrixoEquityTokenI6UyeNs.transfer.call(addressXr7suxb, uint3OVn6l, {from: accounts[3]});

		await expect(DatrixoEquityTokenI6UyeNs.afterStartTime.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressA6lf3N8 = accounts[2]
		const uintoimarly = BigInt("407")
		const DatrixoEquityTokeng2y42KX = await DatrixoEquityToken.new(addressA6lf3N8, uintoimarly, {from: accounts[1]});
		const uintHpQiFMJ = BigInt("788")
		const addressBGH5Tmn = accounts[5]
		const addressZGNj5VZ = accounts[1]
		const addressarrayOjDSbvN = await DatrixoEquityTokeng2y42KX.getShareholdersArray.call({from: "0x0000000000000000000000000000000000000001"});
		const addressarrayiGGRn6X = await DatrixoEquityTokeng2y42KX.getShareholdersArray.call({from: accounts[2]});
		const boolFwk4L2B = await DatrixoEquityTokeng2y42KX.transferFrom.call(addressZGNj5VZ, addressBGH5Tmn, uintHpQiFMJ, {from: accounts[0]});
		await DatrixoEquityTokeng2y42KX.onlyOwner.call({from: accounts[4]});
		const addressarrayfbbvMh6 = await DatrixoEquityTokeng2y42KX.getShareholdersArray.call({from: accounts[5]});

		assert.equal(addressarrayOjDSbvN, )
		assert.equal(addressarrayiGGRn6X, )
		await expect(DatrixoEquityTokeng2y42KX.transferFrom.call(addressZGNj5VZ, addressBGH5Tmn, uintHpQiFMJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressZ3XMIju = accounts[4]
		const uintd14RGz = BigInt("602")
		const DatrixoEquityTokenvoUeqC = await DatrixoEquityToken.new(addressZ3XMIju, uintd14RGz, {from: accounts[2]});
		const uintS0TE0eM = BigInt("518")
		const addressIfA87Lm = accounts[4]
		const addressX5hVwRt = accounts[2]
		const addressmtKTOzJ = accounts[1]
		const boolF6FG30S = await DatrixoEquityTokenvoUeqC.transferFrom.call(addressX5hVwRt, addressIfA87Lm, uintS0TE0eM, {from: accounts[4]});
		const boolVnQVlhC = await DatrixoEquityTokenvoUeqC.removeShareholder.call(addressmtKTOzJ, {from: accounts[5]});
		await DatrixoEquityTokenvoUeqC.onlyOwner.call({from: accounts[4]});

		await expect(DatrixoEquityTokenvoUeqC.transferFrom.call(addressX5hVwRt, addressIfA87Lm, uintS0TE0eM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressYaJiBIa = accounts[0]
		const uintvHbY2Op = BigInt("1159")
		const DatrixoEquityTokenAH1vG4z = await DatrixoEquityToken.new(addressYaJiBIa, uintvHbY2Op, {from: "0x0000000000000000000000000000000000000001"});
		const uintRVUM3jt = BigInt("1630")
		const addressf6nRf7d = accounts[0]
		const addressvgzecuf = accounts[3]
		const addressarrayaJ2QRAF = await DatrixoEquityTokenAH1vG4z.getShareholdersArray.call({from: accounts[4]});
		const addressarrayzhzxVzJ = await DatrixoEquityTokenAH1vG4z.getShareholdersArray.call({from: accounts[4]});
		const addressarrayzHEZnW = await DatrixoEquityTokenAH1vG4z.getShareholdersArray.call({from: accounts[0]});
		const boolyqoJg7u = await DatrixoEquityTokenAH1vG4z.transferFrom.call(addressvgzecuf, addressf6nRf7d, uintRVUM3jt, {from: accounts[1]});
	});

	it('test for DatrixoEquityToken', async () => {
		const addressuHlRp6 = accounts[2]
		const uintmfiwJ9v = BigInt("1447")
		const DatrixoEquityTokenKJKUVXE = await DatrixoEquityToken.new(addressuHlRp6, uintmfiwJ9v, {from: accounts[2]});
		const uintKDqy4Ce = BigInt("1003")
		const addressoUCDSw = accounts[0]
		const uintKRevMD = BigInt("1951")
		const uintytKgRI6 = BigInt("898")
		const uintiGkST2Q = BigInt("1810")
		const addressSnu1JxE = accounts[2]
		const addressRzliGG4 = accounts[1]
		const boolVHr7veE = await DatrixoEquityTokenKJKUVXE.transfer.call(addressoUCDSw, uintKDqy4Ce, {from: accounts[2]});
		const uintuWm9qsC = await DatrixoEquityTokenKJKUVXE.setStart.call(uintKRevMD, {from: accounts[3]});
		const uintbnuN3xr = await DatrixoEquityTokenKJKUVXE.setStart.call(uintytKgRI6, {from: "0x0000000000000000000000000000000000000001"});
		const boolA7h4izc = await DatrixoEquityTokenKJKUVXE.transferFrom.call(addressRzliGG4, addressSnu1JxE, uintiGkST2Q, {from: accounts[1]});

		assert.equal(boolVHr7veE, true)
		await expect(DatrixoEquityTokenKJKUVXE.setStart.call(uintKRevMD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressw8BLK5z = accounts[4]
		const uintrCGyzdd = BigInt("602")
		const DatrixoEquityTokenvoUeqC = await DatrixoEquityToken.new(addressw8BLK5z, uintrCGyzdd, {from: accounts[2]});
		const addressnqb3sv1 = accounts[4]
		const addressw3KUHE0 = accounts[4]
		const boolpTuEfLX = await DatrixoEquityTokenvoUeqC.removeShareholder.call(addressnqb3sv1, {from: accounts[4]});
		const boolVnQVlhC = await DatrixoEquityTokenvoUeqC.removeShareholder.call(addressw3KUHE0, {from: accounts[5]});
		await DatrixoEquityTokenvoUeqC.onlyOwner.call({from: accounts[4]});

		await expect(DatrixoEquityTokenvoUeqC.removeShareholder.call(addressnqb3sv1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresspbkFpeb = accounts[2]
		const uintQqriKKF = BigInt("1447")
		const DatrixoEquityTokenKJKUVXE = await DatrixoEquityToken.new(addresspbkFpeb, uintQqriKKF, {from: accounts[2]});
		const uintob1Git = BigInt("437")
		const addresswpg9Y3Q = accounts[3]
		const uinti5qzVQh = BigInt("1003")
		const addressTzWS1zx = accounts[2]
		const boolBt2pEC = await DatrixoEquityTokenKJKUVXE.transfer.call(addresswpg9Y3Q, uintob1Git, {from: accounts[2]});
		const boolVHr7veE = await DatrixoEquityTokenKJKUVXE.transfer.call(addressTzWS1zx, uinti5qzVQh, {from: accounts[2]});

		assert.equal(boolBt2pEC, true)
		await expect(DatrixoEquityTokenKJKUVXE.transfer.call(addressTzWS1zx, uinti5qzVQh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressOFpZMIR = accounts[2]
		const uintoqdW340 = BigInt("1447")
		const DatrixoEquityTokenKJKUVXE = await DatrixoEquityToken.new(addressOFpZMIR, uintoqdW340, {from: accounts[2]});
		const uintrrHji0G = BigInt("973")
		const addressTVWNMbj = accounts[0]
		const uintKPT6oo = BigInt("209")
		const addressVOd38sj = accounts[3]
		const addressWDa7KgD = accounts[2]
		const addressBHYHHec = accounts[3]
		const boolVHr7veE = await DatrixoEquityTokenKJKUVXE.transfer.call(addressTVWNMbj, uintrrHji0G, {from: accounts[2]});
		const boolEPzzJOb = await DatrixoEquityTokenKJKUVXE.transferFrom.call(addressWDa7KgD, addressVOd38sj, uintKPT6oo, {from: accounts[2]});
		const boolqwlYDn = await DatrixoEquityTokenKJKUVXE.removeShareholder.call(addressBHYHHec, {from: accounts[4]});

		assert.equal(boolEPzzJOb, true)
		assert.equal(boolVHr7veE, true)
		await expect(DatrixoEquityTokenKJKUVXE.removeShareholder.call(addressBHYHHec, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressUJbYQDC = accounts[4]
		const uintOt5DJZV = BigInt("602")
		const DatrixoEquityTokenvoUeqC = await DatrixoEquityToken.new(addressUJbYQDC, uintOt5DJZV, {from: accounts[2]});
		const uintNFtCb8Z = BigInt("328")
		const addressMwpsWmW = accounts[4]
		const uintie8BTZo = await DatrixoEquityTokenvoUeqC.setStart.call(uintNFtCb8Z, {from: accounts[4]});
		const boolpTuEfLX = await DatrixoEquityTokenvoUeqC.removeShareholder.call(addressMwpsWmW, {from: accounts[4]});

		await expect(DatrixoEquityTokenvoUeqC.removeShareholder.call(addressMwpsWmW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressgzxgzb4 = accounts[2]
		const uint1LGlwZ = BigInt("1447")
		const DatrixoEquityTokenKJKUVXE = await DatrixoEquityToken.new(addressgzxgzb4, uint1LGlwZ, {from: accounts[2]});
		const uintmkhIqmS = BigInt("1730")
		const uintSuwRRpi = BigInt("983")
		const addresskQdNxOT = accounts[2]
		const uintRJLs2W3 = BigInt("1286")
		const addressRFVFH9 = accounts[4]
		const addressDSEZJa3 = accounts[0]
		const uintiXDuIHK = await DatrixoEquityTokenKJKUVXE.setStart.call(uintmkhIqmS, {from: accounts[2]});
		const boolVHr7veE = await DatrixoEquityTokenKJKUVXE.transfer.call(addresskQdNxOT, uintSuwRRpi, {from: accounts[2]});
		const boolgfzVXUZ = await DatrixoEquityTokenKJKUVXE.transferFrom.call(addressDSEZJa3, addressRFVFH9, uintRJLs2W3, {from: accounts[1]});

		await expect(DatrixoEquityTokenKJKUVXE.setStart.call(uintmkhIqmS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})