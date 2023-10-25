const DatrixoEquityToken = artifacts.require("DatrixoEquityToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DatrixoEquityToken', (accounts) => {
	it('test for DatrixoEquityToken', async () => {
		const addressR49YfiD = accounts[4]
		const uintyjRAY5o = BigInt("1495")
		const DatrixoEquityTokenymKklV = await DatrixoEquityToken.new(addressR49YfiD, uintyjRAY5o, {from: accounts[0]});
		const uintzyABCBV = BigInt("4")
		const addressTr8Nb5R = accounts[1]
		const addressarrayjt7hXEW = await DatrixoEquityTokenymKklV.getShareholdersArray.call({from: accounts[3]});
		const boolAQNK7Pf = await DatrixoEquityTokenymKklV.transfer.call(addressTr8Nb5R, uintzyABCBV, {from: accounts[5]});
		await DatrixoEquityTokenymKklV.afterStartTime.call({from: accounts[1]});

		assert.equal(addressarrayjt7hXEW, )
		await expect(DatrixoEquityTokenymKklV.transfer.call(addressTr8Nb5R, uintzyABCBV, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressnsYpBfP = accounts[4]
		const uintqOrp93P = BigInt("1355")
		const DatrixoEquityTokenA86W4Ck = await DatrixoEquityToken.new(addressnsYpBfP, uintqOrp93P, {from: accounts[0]});
		const uintwm7kMjm = BigInt("1932")
		const addressoxQmyZE = accounts[1]
		const addressxCtrAhY = accounts[5]
		const uintcR0IbKw = BigInt("838")
		const addressBs6I4Eg = accounts[1]
		const addresshZLDvmt = accounts[1]
		await DatrixoEquityTokenA86W4Ck.onlyOwner.call({from: accounts[3]});
		const addressarraylfUE588 = await DatrixoEquityTokenA86W4Ck.getShareholdersArray.call({from: accounts[3]});
		await DatrixoEquityTokenA86W4Ck.afterStartTime.call({from: accounts[3]});
		const boolay4Mikp = await DatrixoEquityTokenA86W4Ck.transferFrom.call(addressxCtrAhY, addressoxQmyZE, uintwm7kMjm, {from: accounts[2]});
		const boolAL3wIx9 = await DatrixoEquityTokenA86W4Ck.transferFrom.call(addresshZLDvmt, addressBs6I4Eg, uintcR0IbKw, {from: accounts[4]});
		await DatrixoEquityTokenA86W4Ck.onlyOwner.call({from: accounts[2]});

		await expect(DatrixoEquityTokenA86W4Ck.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressQLL5ixP = accounts[1]
		const uintYlZdkiJ = BigInt("1441")
		const DatrixoEquityTokenSwS1ywz = await DatrixoEquityToken.new(addressQLL5ixP, uintYlZdkiJ, {from: accounts[3]});
		const uintUqgO4jv = BigInt("197")
		const addresssYZQgKj = accounts[3]
		const uintGMi2c3o = BigInt("210")
		const addresslciocUw = accounts[2]
		const uintIX4YA9 = BigInt("1234")
		const addresswzlAV7i = accounts[5]
		const addressgKvFmuL = accounts[2]
		const boolV8KTKs = await DatrixoEquityTokenSwS1ywz.transfer.call(addresssYZQgKj, uintUqgO4jv, {from: accounts[1]});
		const boolxJuhrFo = await DatrixoEquityTokenSwS1ywz.transfer.call(addresslciocUw, uintGMi2c3o, {from: accounts[4]});
		const addressarraylfA7IIP = await DatrixoEquityTokenSwS1ywz.getShareholdersArray.call({from: accounts[0]});
		const boolTGiz43Q = await DatrixoEquityTokenSwS1ywz.transferFrom.call(addressgKvFmuL, addresswzlAV7i, uintIX4YA9, {from: accounts[0]});

		assert.equal(boolV8KTKs, true)
		await expect(DatrixoEquityTokenSwS1ywz.transfer.call(addresslciocUw, uintGMi2c3o, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressYkrgBf7 = accounts[3]
		const uintT6EI3F0 = BigInt("743")
		const DatrixoEquityTokenHocnhPg = await DatrixoEquityToken.new(addressYkrgBf7, uintT6EI3F0, {from: "0x0000000000000000000000000000000000000001"});
		const addressOfLSYS1 = accounts[1]
		const boolqpTXfjI = await DatrixoEquityTokenHocnhPg.removeShareholder.call(addressOfLSYS1, {from: accounts[3]});
		const addressarrayiDLPbf = await DatrixoEquityTokenHocnhPg.getShareholdersArray.call({from: accounts[0]});
		const addressarrayoqsrYS = await DatrixoEquityTokenHocnhPg.getShareholdersArray.call({from: accounts[2]});
		await DatrixoEquityTokenHocnhPg.onlyOwner.call({from: accounts[0]});
	});

	it('test for DatrixoEquityToken', async () => {
		const addressqV5bfUm = accounts[1]
		const uintDg8RTWV = BigInt("1441")
		const DatrixoEquityTokenSwS1ywz = await DatrixoEquityToken.new(addressqV5bfUm, uintDg8RTWV, {from: accounts[3]});
		const uintP3Pjict = BigInt("197")
		const addressTYLLfGw = accounts[1]
		const addressi6Xdsg0 = accounts[1]
		const boolV8KTKs = await DatrixoEquityTokenSwS1ywz.transfer.call(addressTYLLfGw, uintP3Pjict, {from: accounts[1]});
		const boolfbRDTD7 = await DatrixoEquityTokenSwS1ywz.removeShareholder.call(addressi6Xdsg0, {from: accounts[2]});

		await expect(DatrixoEquityTokenSwS1ywz.transfer.call(addressTYLLfGw, uintP3Pjict, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressR3AtehJ = accounts[5]
		const uintN0Q2IX = BigInt("618")
		const DatrixoEquityTokenzbx9GGv = await DatrixoEquityToken.new(addressR3AtehJ, uintN0Q2IX, {from: accounts[0]});
		const uinttACudjD = BigInt("274")
		const addresser9NFm = accounts[1]
		const addressWw8aRpG = accounts[1]
		const addressarraymE8HJnL = await DatrixoEquityTokenzbx9GGv.getShareholdersArray.call({from: accounts[3]});
		const boolldDx6FX = await DatrixoEquityTokenzbx9GGv.transferFrom.call(addressWw8aRpG, addresser9NFm, uinttACudjD, {from: accounts[5]});
		await DatrixoEquityTokenzbx9GGv.afterStartTime.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressarraymE8HJnL, )
		await expect(DatrixoEquityTokenzbx9GGv.transferFrom.call(addressWw8aRpG, addresser9NFm, uinttACudjD, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressqB4RtJ7 = accounts[5]
		const uint9b9NFw = BigInt("618")
		const DatrixoEquityTokenzbx9GGv = await DatrixoEquityToken.new(addressqB4RtJ7, uint9b9NFw, {from: accounts[0]});
		const uintvOmve1A = BigInt("274")
		const addressfbDPmt5 = accounts[1]
		const addressRpMjjqc = accounts[5]
		const addresskwuh4YQ = accounts[0]
		const addressarraymE8HJnL = await DatrixoEquityTokenzbx9GGv.getShareholdersArray.call({from: accounts[3]});
		const boolldDx6FX = await DatrixoEquityTokenzbx9GGv.transferFrom.call(addressRpMjjqc, addressfbDPmt5, uintvOmve1A, {from: accounts[5]});
		await DatrixoEquityTokenzbx9GGv.afterStartTime.call({from: "0x0000000000000000000000000000000000000001"});
		const boolOBGb3nR = await DatrixoEquityTokenzbx9GGv.removeShareholder.call(addresskwuh4YQ, {from: accounts[3]});

		assert.equal(addressarraymE8HJnL, )
		assert.equal(boolldDx6FX, true)
		await expect(DatrixoEquityTokenzbx9GGv.afterStartTime.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresswhmCll5 = accounts[1]
		const uintb0BFZS = BigInt("1441")
		const DatrixoEquityTokenSwS1ywz = await DatrixoEquityToken.new(addresswhmCll5, uintb0BFZS, {from: accounts[3]});
		const uintXttkHiy = BigInt("197")
		const addressYKO1iv = accounts[6]
		const uintmlyRYQ = BigInt("1905")
		const boolV8KTKs = await DatrixoEquityTokenSwS1ywz.transfer.call(addressYKO1iv, uintXttkHiy, {from: accounts[1]});
		const uintaVCLsxL = await DatrixoEquityTokenSwS1ywz.setStart.call(uintmlyRYQ, {from: accounts[1]});

		assert.equal(boolV8KTKs, true)
		await expect(DatrixoEquityTokenSwS1ywz.setStart.call(uintmlyRYQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressHoC6CZV = accounts[1]
		const uintVWgmvM0 = BigInt("1441")
		const DatrixoEquityTokenSwS1ywz = await DatrixoEquityToken.new(addressHoC6CZV, uintVWgmvM0, {from: accounts[3]});
		const uintWABHUTj = BigInt("197")
		const addressbNBk5He = accounts[3]
		const addressX4znst8 = accounts[5]
		const boolV8KTKs = await DatrixoEquityTokenSwS1ywz.transfer.call(addressbNBk5He, uintWABHUTj, {from: accounts[1]});
		const boolBnMAo2O = await DatrixoEquityTokenSwS1ywz.removeShareholder.call(addressX4znst8, {from: accounts[1]});

		assert.equal(boolV8KTKs, true)
		await expect(DatrixoEquityTokenSwS1ywz.removeShareholder.call(addressX4znst8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})