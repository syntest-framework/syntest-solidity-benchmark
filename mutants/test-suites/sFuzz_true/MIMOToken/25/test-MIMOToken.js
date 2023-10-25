const MIMOToken = artifacts.require("MIMOToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MIMOToken', (accounts) => {
	it('test for MIMOToken', async () => {
		const MIMOTokenmASfWi = await MIMOToken.new({from: accounts[0]});
		const addresshGucqrT = accounts[3]
		const addressnjiPolV = accounts[2]
		const addressFp2V5V = accounts[3]
		const addressEDh0qYJ = accounts[0]
		const uintQ6dYVQ = await MIMOTokenmASfWi.allowance.call(addressnjiPolV, addresshGucqrT, {from: "0x0000000000000000000000000000000000000001"});
		const uintnYlbK5z = await MIMOTokenmASfWi.totalSupply.call({from: accounts[3]});
		const uintESEcXRv = await MIMOTokenmASfWi.allowance.call(addressEDh0qYJ, addressFp2V5V, {from: accounts[0]});

		assert.equal(uintESEcXRv, BigInt("0"))
		assert.equal(uintQ6dYVQ, BigInt("0"))
		assert.equal(uintnYlbK5z, BigInt("16000000000000000000000000"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenIzJHk5D = await MIMOToken.new({from: accounts[0]});
		const addressIcRnVT3 = accounts[3]
		const uinterWQUJY = BigInt("55")
		const uintC1dzOso = await MIMOTokenIzJHk5D.balanceOf.call(addressIcRnVT3, {from: "0x0000000000000000000000000000000000000001"});
		const uintbK8BHzU = await MIMOTokenIzJHk5D.totalSupply.call({from: accounts[2]});
		const uint256zITURNK = await MIMOTokenIzJHk5D.setMinFee.call(uinterWQUJY, {from: accounts[3]});

		assert.equal(uintC1dzOso, BigInt("0"))
		assert.equal(uintbK8BHzU, BigInt("16000000000000000000000000"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenLApbXJH = await MIMOToken.new({from: accounts[4]});
		const uintCdu00si = BigInt("621")
		const addressEbMjHoZ = accounts[4]
		const addressuH3d69Q = accounts[4]
		const uinteUnQx2O = BigInt("1694")
		const addressc2vl6h8 = accounts[1]
		const addressKfzRC8 = accounts[4]
		const uint8o8LdK = BigInt("1320")
		const uintTg783fo = BigInt("1851")
		const addressqsJVqIN = accounts[3]
		const addressyfVslLP = accounts[0]
//		const boolA5k0MnW = await MIMOTokenLApbXJH.transferFrom.call(addressuH3d69Q, addressEbMjHoZ, uintCdu00si, {from: accounts[0]});
//		const boolPk8IKep = await MIMOTokenLApbXJH.transferFrom.call(addressKfzRC8, addressc2vl6h8, uinteUnQx2O, {from: accounts[4]});
//		const uint256nkvCfJ = await MIMOTokenLApbXJH.setFeeRate.call(uint8o8LdK, {from: accounts[1]});
//		const boolpfuEeq3 = await MIMOTokenLApbXJH.transferFrom.call(addressyfVslLP, addressqsJVqIN, uintTg783fo, {from: accounts[4]});

		await expect(MIMOTokenLApbXJH.transferFrom.call(addressuH3d69Q, addressEbMjHoZ, uintCdu00si, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenpez7UpD = await MIMOToken.new({from: accounts[2]});
		const uintGXb6FsU = BigInt("1828")
		const addressC7Gupcv = accounts[4]
		const addressvB9kfZ = accounts[4]
		const boollfSUvvp = await MIMOTokenpez7UpD.approve.call(addressC7Gupcv, uintGXb6FsU, {from: accounts[2]});
		const uintDOL89Ur = await MIMOTokenpez7UpD.balanceOf.call(addressvB9kfZ, {from: accounts[5]});

		assert.equal(boollfSUvvp, true)
		assert.equal(uintDOL89Ur, BigInt("0"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenhQDxqvR = await MIMOToken.new({from: accounts[4]});
		const uintDqPu3P = BigInt("1859")
		const addressjfFJAi = accounts[1]
		const addressC6QK7HN = accounts[1]
		const uintH6iZfmW = BigInt("352")
		const addressJpc2Fd9 = accounts[1]
		const uint256tNhI3JW = await MIMOTokenhQDxqvR.setFeeRate.call(uintDqPu3P, {from: accounts[4]});
		const uintgvUBjJo = await MIMOTokenhQDxqvR.allowance.call(addressC6QK7HN, addressjfFJAi, {from: accounts[4]});
		const boolgEJLqsg = await MIMOTokenhQDxqvR.approve.call(addressJpc2Fd9, uintH6iZfmW, {from: accounts[4]});

		assert.equal(boolgEJLqsg, true)
		assert.equal(uintgvUBjJo, BigInt("0"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokennnY7ZOX = await MIMOToken.new({from: accounts[0]});
		const uintmB55i4N = BigInt("317")
		const uintBd7Vi9x = BigInt("1080")
		const addressytadlpa = accounts[4]
		const uintqU8NKoz = BigInt("1708")
		const addressbA050ua = accounts[3]
		const uintsxOqVzA = BigInt("540")
		const uintp0PefJl = BigInt("402")
		const uint256DGBTt9d = await MIMOTokennnY7ZOX.setFeeRate.call(uintmB55i4N, {from: accounts[1]});
//		const boolwYPocql = await MIMOTokennnY7ZOX.transfer.call(addressytadlpa, uintBd7Vi9x, {from: accounts[0]});
//		const boolpv4VCD = await MIMOTokennnY7ZOX.transfer.call(addressbA050ua, uintqU8NKoz, {from: accounts[1]});
//		const uint256xGbIYmg = await MIMOTokennnY7ZOX.setFeeRate.call(uintsxOqVzA, {from: accounts[4]});
//		const uint256oguNK4j = await MIMOTokennnY7ZOX.setFeeRate.call(uintp0PefJl, {from: accounts[3]});

		await expect(MIMOTokennnY7ZOX.transfer.call(addressytadlpa, uintBd7Vi9x, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenzFZQmw = await MIMOToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintb6TcQlp = BigInt("403")
		const addressUSjZACq = accounts[5]
		const uintDuUP8UI = BigInt("1913")
		const addressJdK6DgL = accounts[1]
		const uintXuE2xmy = BigInt("302")
		const addressZIezm7V = accounts[1]
		const addressOvl6Zw = accounts[0]
		const uintsDxxEKm = BigInt("1985")
		const boolq6U0g4I = await MIMOTokenzFZQmw.transfer.call(addressUSjZACq, uintb6TcQlp, {from: accounts[1]});
		const boolYiH4UWA = await MIMOTokenzFZQmw.approve.call(addressJdK6DgL, uintDuUP8UI, {from: accounts[4]});
		const boolKlzmXws = await MIMOTokenzFZQmw.transferFrom.call(addressOvl6Zw, addressZIezm7V, uintXuE2xmy, {from: accounts[2]});
		const uintkTkzw4u = await MIMOTokenzFZQmw.totalSupply.call({from: accounts[0]});
		const uint256JVFGKZI = await MIMOTokenzFZQmw.setFeeRate.call(uintsDxxEKm, {from: accounts[0]});
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenpez7UpD = await MIMOToken.new({from: accounts[2]});
		const uintN3H4zOO = BigInt("1828")
		const addressDHLeeI5 = accounts[5]
		const uinttH3CQck = BigInt("1820")
		const boollfSUvvp = await MIMOTokenpez7UpD.approve.call(addressDHLeeI5, uintN3H4zOO, {from: accounts[2]});
		const uint256ONQrmkB = await MIMOTokenpez7UpD.getFee.call(uinttH3CQck, {from: accounts[2]});

		assert.equal(boollfSUvvp, true)
		assert.equal(uint256ONQrmkB, BigInt("50000000000000000"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenjUZCOjQ = await MIMOToken.new({from: accounts[3]});
		const addressDWAdcmm = accounts[3]
		const uintQOeXWDa = BigInt("1382")
		const addressqMwB1PO = accounts[2]
		const uintRIoOwvn = BigInt("548")
		const addressvjtHXMN = "0x0000000000000000000000000000000000000000"
		const addressJfisNK5 = accounts[5]
		const uintVsfAUqO = await MIMOTokenjUZCOjQ.balanceOf.call(addressDWAdcmm, {from: accounts[2]});
		const uint256OmNZZco = await MIMOTokenjUZCOjQ.setMinFee.call(uintQOeXWDa, {from: accounts[4]});
		const uintBVIR0zp = await MIMOTokenjUZCOjQ.balanceOf.call(addressqMwB1PO, {from: accounts[5]});
//		const boolyxGbsz = await MIMOTokenjUZCOjQ.transferFrom.call(addressJfisNK5, addressvjtHXMN, uintRIoOwvn, {from: accounts[4]});

		assert.equal(uintBVIR0zp, BigInt("0"))
		assert.equal(uintVsfAUqO, BigInt("0"))
		await expect(MIMOTokenjUZCOjQ.transferFrom.call(addressJfisNK5, addressvjtHXMN, uintRIoOwvn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})