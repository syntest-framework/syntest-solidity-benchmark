const ETFXPool = artifacts.require("ETFXPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ETFXPool', (accounts) => {
	it('test for ETFXPool', async () => {
		const ETFXPoolIWuVDzi = await ETFXPool.new({from: accounts[2]});
		const stringySeOSA = await ETFXPoolIWuVDzi.symbol.call({from: accounts[3]});
		await ETFXPoolIWuVDzi.nonReentrant.call({from: accounts[0]});
		await ETFXPoolIWuVDzi.renounceOwnership.call({from: accounts[5]});

		assert.equal(stringySeOSA, "FETFX")
		await expect(ETFXPoolIWuVDzi.nonReentrant.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolI8JEgMi = await ETFXPool.new({from: accounts[1]});
		const uintTQ4wYEL = BigInt("1743")
		const addressR8D83OA = accounts[2]
		const addresswRT4NcB = accounts[4]
		const uintymTtB78 = BigInt("196")
		const addressSbAa54n = accounts[2]
		const addressf8lS4df = "0x0000000000000000000000000000000000000001"
		const boolrbtUdLQ = await ETFXPoolI8JEgMi.transfer.call(addressR8D83OA, uintTQ4wYEL, {from: accounts[4]});
		const uint256MxbsGQF = await ETFXPoolI8JEgMi.earned.call(addresswRT4NcB, {from: "0x0000000000000000000000000000000000000001"});
		const boolm0CitPd = await ETFXPoolI8JEgMi.transferFrom.call(addressf8lS4df, addressSbAa54n, uintymTtB78, {from: accounts[5]});
		await ETFXPoolI8JEgMi.getReward.call({from: accounts[3]});

		await expect(ETFXPoolI8JEgMi.transfer.call(addressR8D83OA, uintTQ4wYEL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolpBsk7h3 = await ETFXPool.new({from: accounts[0]});
		const uintZG9J88e = BigInt("958")
		const addressuaHDuiC = accounts[4]
		const uint256yWadKGv = await ETFXPoolpBsk7h3.totalSupply.call({from: accounts[3]});
		const boolOFOrfWL = await ETFXPoolpBsk7h3.approve.call(addressuaHDuiC, uintZG9J88e, {from: accounts[1]});

		assert.equal(boolOFOrfWL, true)
		assert.equal(uint256yWadKGv, BigInt("0"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolw85jAtW = await ETFXPool.new({from: accounts[4]});
		const uintNNgEds4 = BigInt("742")
		const addressTxAPfX = accounts[2]
		await ETFXPoolw85jAtW.exit.call({from: accounts[0]});
		const boolI5jRB0N = await ETFXPoolw85jAtW.decreaseAllowance.call(addressTxAPfX, uintNNgEds4, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ETFXPoolw85jAtW.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoola0jB4dU = await ETFXPool.new({from: accounts[0]});
		const uintR6aMiTm = BigInt("455")
		const uintzAoYQwl = BigInt("1700")
		const addressoKm2wz = accounts[5]
		const uintRjqGopq = BigInt("430")
		const addresswyTGsg2 = accounts[1]
		const addressO3h68qj = accounts[3]
		const uintseCn9xY = BigInt("1099")
		const addressYh64cDS = accounts[1]
		const uintIVG4loB = BigInt("1646")
		const uint256IdOJebB = await ETFXPoola0jB4dU.withdraw.call(uintR6aMiTm, {from: accounts[4]});
		await ETFXPoola0jB4dU.renounceOwnership.call({from: accounts[5]});
		const boolfxHAbom = await ETFXPoola0jB4dU.approve.call(addressoKm2wz, uintzAoYQwl, {from: accounts[4]});
		const boolSA13h4T = await ETFXPoola0jB4dU.transferFrom.call(addressO3h68qj, addresswyTGsg2, uintRjqGopq, {from: accounts[1]});
		const boolfBWFa8K = await ETFXPoola0jB4dU.increaseAllowance.call(addressYh64cDS, uintseCn9xY, {from: accounts[3]});
		const uint256U8JJQXX = await ETFXPoola0jB4dU.stake.call(uintIVG4loB, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ETFXPoola0jB4dU.withdraw.call(uintR6aMiTm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolufowVyK = await ETFXPool.new({from: accounts[3]});
		const addressD00YeMC = accounts[3]
		await ETFXPoolufowVyK.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const addresswdKtUm0 = await ETFXPoolufowVyK.transferOwnership.call(addressD00YeMC, {from: accounts[3]});
		const addressgpQQEkA = await ETFXPoolufowVyK.owner.call({from: accounts[3]});

		await expect(ETFXPoolufowVyK.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolA21rpPV = await ETFXPool.new({from: accounts[4]});
		const uint5mc8cB = BigInt("1368")
		const uint256OwqdI30 = await ETFXPoolA21rpPV.stake.call(uint5mc8cB, {from: accounts[4]});
		const stringERtbXy6 = await ETFXPoolA21rpPV.name.call({from: accounts[1]});
		const stringuPPNUP = await ETFXPoolA21rpPV.symbol.call({from: accounts[0]});
		const uint256rYsfCht = await ETFXPoolA21rpPV.totalSupply.call({from: accounts[0]});
		await ETFXPoolA21rpPV.nonReentrant.call({from: accounts[1]});

		await expect(ETFXPoolA21rpPV.stake.call(uint5mc8cB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolzhnTyot = await ETFXPool.new({from: "0x0000000000000000000000000000000000000001"});
		const uintvpEe6C3 = BigInt("195")
		const addresspOSLC4f = accounts[1]
		const addressIr2vCIy = accounts[2]
		const addresskXO0zEs = accounts[2]
		const uintCOpziTX = BigInt("719")
		const addressCqV4pWJ = accounts[4]
		const booljOLT8O = await ETFXPoolzhnTyot.decreaseAllowance.call(addresspOSLC4f, uintvpEe6C3, {from: accounts[4]});
		const addressLG7CimK = await ETFXPoolzhnTyot.owner.call({from: accounts[1]});
		const uint256JRMBL3e = await ETFXPoolzhnTyot.allowance.call(addresskXO0zEs, addressIr2vCIy, {from: accounts[1]});
		const stringhiIa0CC = await ETFXPoolzhnTyot.symbol.call({from: accounts[1]});
		const boolc55K1wD = await ETFXPoolzhnTyot.transfer.call(addressCqV4pWJ, uintCOpziTX, {from: accounts[3]});
	});

	it('test for ETFXPool', async () => {
		const stringz1rB5M = "vT7wdvbRiczYs8OyxdosugLhJncbzT0DyucYxFkrVwPzi9R9"
		const stringyvN3iot = "6AWdiHjSDbYPGZmZvGg4spcnUBY7D2aIjyyiUXun"
		const uintICYbpeo = BigInt("184")
		const ETFXPoolEgA9lfn = await ETFXPool.new(stringz1rB5M, stringyvN3iot, uintICYbpeo, {from: accounts[0]});
		const uint4P1I9A = BigInt("1629")
		const addressz0CA9Yz = accounts[4]
		const boolKz9ofZQ = await ETFXPoolEgA9lfn.approve.call(addressz0CA9Yz, uint4P1I9A, {from: accounts[5]});
		await ETFXPoolEgA9lfn.onlyOwner.call({from: accounts[1]});
		const addressh5xW6sp = await ETFXPoolEgA9lfn.owner.call({from: accounts[5]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolnmA88SU = await ETFXPool.new({from: accounts[1]});
		const addressE8J7kRh = accounts[1]
		const uintMKpm4xk = BigInt("850")
		const stringsgUq0GP = await ETFXPoolnmA88SU.name.call({from: accounts[3]});
		const uint256jq9TbIQ = await ETFXPoolnmA88SU.earned.call(addressE8J7kRh, {from: "0x0000000000000000000000000000000000000001"});
		const uint256tV5IqwU = await ETFXPoolnmA88SU.stake.call(uintMKpm4xk, {from: accounts[3]});
		const stringmKLOQ4t = await ETFXPoolnmA88SU.symbol.call({from: accounts[3]});

		assert.equal(stringsgUq0GP, "ETFX-FARM")
		await expect(ETFXPoolnmA88SU.earned.call(addressE8J7kRh, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolpBsk7h3 = await ETFXPool.new({from: accounts[0]});
		const uintCFFbOe = BigInt("1488")
		const uintM6B0EiP = BigInt("958")
		const addressCsWZJ9 = accounts[5]
		const uint256yWadKGv = await ETFXPoolpBsk7h3.totalSupply.call({from: accounts[3]});
		const uint256Mvli4Yf = await ETFXPoolpBsk7h3.rewardPerToken.call({from: accounts[2]});
		const uint256B1zxFcR = await ETFXPoolpBsk7h3.totalSupply.call({from: accounts[0]});
		const uint256iiBNfft = await ETFXPoolpBsk7h3.withdraw.call(uintCFFbOe, {from: accounts[2]});
		const boolOFOrfWL = await ETFXPoolpBsk7h3.approve.call(addressCsWZJ9, uintM6B0EiP, {from: accounts[1]});

		assert.equal(uint256B1zxFcR, BigInt("0"))
		assert.equal(uint256Mvli4Yf, BigInt("0"))
		assert.equal(uint256yWadKGv, BigInt("0"))
		await expect(ETFXPoolpBsk7h3.withdraw.call(uintCFFbOe, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolpBsk7h3 = await ETFXPool.new({from: accounts[0]});
		const uintG6Sqhe = BigInt("2020")
		const addressQaddf1 = "0x0000000000000000000000000000000000000001"
		const addressNyYGEcy = accounts[1]
		const uintFYZa8q3 = BigInt("958")
		const addressfgVzJa = "0x0000000000000000000000000000000000000001"
		const boolKjqfe9i = await ETFXPoolpBsk7h3.transferFrom.call(addressNyYGEcy, addressQaddf1, uintG6Sqhe, {from: accounts[4]});
		const uint256yWadKGv = await ETFXPoolpBsk7h3.totalSupply.call({from: accounts[3]});
		const boolOFOrfWL = await ETFXPoolpBsk7h3.approve.call(addressfgVzJa, uintFYZa8q3, {from: accounts[1]});

		await expect(ETFXPoolpBsk7h3.transferFrom.call(addressNyYGEcy, addressQaddf1, uintG6Sqhe, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolpBsk7h3 = await ETFXPool.new({from: accounts[0]});
		const addressGBaaoyS = accounts[1]
		const uintZq94nIs = BigInt("1488")
		const uintpeYZCTd = BigInt("958")
		const addressLXtNiAw = accounts[5]
		const uint256yWadKGv = await ETFXPoolpBsk7h3.totalSupply.call({from: accounts[3]});
		const uint256Mvli4Yf = await ETFXPoolpBsk7h3.rewardPerToken.call({from: accounts[2]});
		const uint256B1zxFcR = await ETFXPoolpBsk7h3.totalSupply.call({from: accounts[0]});
		const uint256y1OV0K2 = await ETFXPoolpBsk7h3.rewardPerToken.call({from: accounts[2]});
		const addressxUZ8p7h = await ETFXPoolpBsk7h3.transferOwnership.call(addressGBaaoyS, {from: accounts[0]});
		const uint256iiBNfft = await ETFXPoolpBsk7h3.withdraw.call(uintZq94nIs, {from: accounts[2]});
		const boolOFOrfWL = await ETFXPoolpBsk7h3.approve.call(addressLXtNiAw, uintpeYZCTd, {from: accounts[1]});

		assert.equal(uint256B1zxFcR, BigInt("0"))
		assert.equal(uint256Mvli4Yf, BigInt("0"))
		assert.equal(uint256y1OV0K2, BigInt("0"))
		assert.equal(uint256yWadKGv, BigInt("0"))
		await expect(ETFXPoolpBsk7h3.withdraw.call(uintZq94nIs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolw85jAtW = await ETFXPool.new({from: accounts[4]});
		const uintQA92QQ0 = BigInt("742")
		const addressG8Tw2P5 = accounts[2]
		const uint256gvkQ5gQ = await ETFXPoolw85jAtW.totalSupply.call({from: accounts[5]});
		const boolI5jRB0N = await ETFXPoolw85jAtW.decreaseAllowance.call(addressG8Tw2P5, uintQA92QQ0, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256gvkQ5gQ, BigInt("0"))
		await expect(ETFXPoolw85jAtW.decreaseAllowance.call(addressG8Tw2P5, uintQA92QQ0, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolpBsk7h3 = await ETFXPool.new({from: accounts[0]});
		const uintlfVXvql = BigInt("1437")
		const address8lE7bc = accounts[0]
		const uintcHpTba = BigInt("1007")
		const addressbordrFT = accounts[3]
		const uintB2zfHfd = BigInt("1488")
		const uintH6sPITW = BigInt("958")
		const addressljd4dNp = accounts[5]
		const boolzvNo6cu = await ETFXPoolpBsk7h3.increaseAllowance.call(address8lE7bc, uintlfVXvql, {from: accounts[1]});
		const uint256yWadKGv = await ETFXPoolpBsk7h3.totalSupply.call({from: accounts[3]});
		const uint256Mvli4Yf = await ETFXPoolpBsk7h3.rewardPerToken.call({from: accounts[2]});
		const boolco3NaGE = await ETFXPoolpBsk7h3.approve.call(addressbordrFT, uintcHpTba, {from: accounts[0]});
		const uint256B1zxFcR = await ETFXPoolpBsk7h3.totalSupply.call({from: accounts[0]});
		const uint256iiBNfft = await ETFXPoolpBsk7h3.withdraw.call(uintB2zfHfd, {from: accounts[2]});
		const boolOFOrfWL = await ETFXPoolpBsk7h3.approve.call(addressljd4dNp, uintH6sPITW, {from: accounts[1]});
		await ETFXPoolpBsk7h3.exit.call({from: accounts[5]});

		assert.equal(boolco3NaGE, true)
		assert.equal(boolzvNo6cu, true)
		assert.equal(uint256B1zxFcR, BigInt("0"))
		assert.equal(uint256Mvli4Yf, BigInt("0"))
		assert.equal(uint256yWadKGv, BigInt("0"))
		await expect(ETFXPoolpBsk7h3.withdraw.call(uintB2zfHfd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolHfipQcx = await ETFXPool.new({from: accounts[2]});
		const uintCw3a5MT = BigInt("789")
		const addressA5lZbHc = accounts[3]
		const addressE1xDnYj = await ETFXPoolHfipQcx.owner.call({from: accounts[3]});
		const boolUcQWb6t = await ETFXPoolHfipQcx.increaseAllowance.call(addressA5lZbHc, uintCw3a5MT, {from: accounts[1]});

		assert.equal(addressE1xDnYj, 0x5c847fA48749015A1bD6E283dC77F053641A2cF9)
		assert.equal(boolUcQWb6t, true)
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolpBsk7h3 = await ETFXPool.new({from: accounts[0]});
		const uint256yWadKGv = await ETFXPoolpBsk7h3.totalSupply.call({from: accounts[3]});
		await ETFXPoolpBsk7h3.getReward.call({from: accounts[1]});
		const addressmcMlMjx = await ETFXPoolpBsk7h3.owner.call({from: accounts[3]});
		const stringzM5AFD6 = await ETFXPoolpBsk7h3.symbol.call({from: accounts[2]});

		assert.equal(uint256yWadKGv, BigInt("0"))
		await expect(ETFXPoolpBsk7h3.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolpBsk7h3 = await ETFXPool.new({from: accounts[0]});
		const addressQwZ6hkS = accounts[3]
		const addressGHg6eq3 = accounts[4]
		const uintwXeyQbU = BigInt("1853")
		const addressbMTX5em = accounts[3]
		const uintdJHOVCR = BigInt("1489")
		const addressO9AmA5J = accounts[4]
		const addressWO8s7Xj = accounts[3]
		const uintmXlzA0 = BigInt("1488")
		const uintSVa8wxc = BigInt("958")
		const addresshFVfbD1 = accounts[5]
		const uint256yWadKGv = await ETFXPoolpBsk7h3.totalSupply.call({from: accounts[3]});
		const uint256NrogthZ = await ETFXPoolpBsk7h3.allowance.call(addressGHg6eq3, addressQwZ6hkS, {from: accounts[3]});
		const uint256Mvli4Yf = await ETFXPoolpBsk7h3.rewardPerToken.call({from: accounts[2]});
		const boolq2ftIf = await ETFXPoolpBsk7h3.decreaseAllowance.call(addressbMTX5em, uintwXeyQbU, {from: accounts[1]});
		const uint256B1zxFcR = await ETFXPoolpBsk7h3.totalSupply.call({from: accounts[0]});
		const boolb9jkNxa = await ETFXPoolpBsk7h3.transferFrom.call(addressWO8s7Xj, addressO9AmA5J, uintdJHOVCR, {from: accounts[0]});
		await ETFXPoolpBsk7h3.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256iiBNfft = await ETFXPoolpBsk7h3.withdraw.call(uintmXlzA0, {from: accounts[2]});
		const boolOFOrfWL = await ETFXPoolpBsk7h3.approve.call(addresshFVfbD1, uintSVa8wxc, {from: accounts[1]});

		assert.equal(uint256Mvli4Yf, BigInt("0"))
		assert.equal(uint256NrogthZ, BigInt("0"))
		assert.equal(uint256yWadKGv, BigInt("0"))
		await expect(ETFXPoolpBsk7h3.decreaseAllowance.call(addressbMTX5em, uintwXeyQbU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolIivu2j = await ETFXPool.new({from: accounts[3]});
		const uintrOCbUuN = BigInt("1307")
		const address0RI4NO = accounts[5]
		const boolHQRcQOd = await ETFXPoolIivu2j.increaseAllowance.call(address0RI4NO, uintrOCbUuN, {from: accounts[4]});
		const uint256TxDM16I = await ETFXPoolIivu2j.rewardPerToken.call({from: accounts[1]});
		const uint8GYJNw66 = await ETFXPoolIivu2j.decimals.call({from: accounts[2]});

		assert.equal(boolHQRcQOd, true)
		assert.equal(uint256TxDM16I, BigInt("0"))
		assert.equal(uint8GYJNw66, BigInt("8"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolpBsk7h3 = await ETFXPool.new({from: accounts[0]});
		const uint256yWadKGv = await ETFXPoolpBsk7h3.totalSupply.call({from: accounts[3]});
		await ETFXPoolpBsk7h3.renounceOwnership.call({from: accounts[0]});
		const uint8LxqbZbS = await ETFXPoolpBsk7h3.decimals.call({from: accounts[4]});
		await ETFXPoolpBsk7h3.getReward.call({from: accounts[1]});
		const addressmcMlMjx = await ETFXPoolpBsk7h3.owner.call({from: accounts[3]});

		assert.equal(uint256yWadKGv, BigInt("0"))
		await expect(ETFXPoolpBsk7h3.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})