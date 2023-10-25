const INS = artifacts.require("INS");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('INS', (accounts) => {
	it('test for INS', async () => {
		const uint3ddtxw = BigInt("130")
		const stringqxEgKZo = "WHcjiqs7t0yExngST5hWyNIqh2hn2Xgu54bHNiKrrm4RQ4UVOYgtc49Sq71fLS"
		const stringsLtwpT4 = "vw2ULGZrkbOUoaRuQl7MnQNbMU1hD4RfbsTEONeenV5IY7KaRbmhpJjMkIh3J"
		const INSNWGovVi = await INS.new(uint3ddtxw, stringqxEgKZo, stringsLtwpT4, {from: "0x0000000000000000000000000000000000000001"});
		const byteF4KXe7k = "0x18161709120f071a1f140c"
		const uintMmwhbTR = BigInt("723")
		const addressoe08Xa5 = accounts[4]
		const uintQq6Pw7t = BigInt("1594")
		const addresshTTfWQj = "0x0000000000000000000000000000000000000001"
		const addressXNWu8TX = "0x0000000000000000000000000000000000000001"
		const boolMjXOKEt = await INSNWGovVi.approveAndCall.call(addressoe08Xa5, uintMmwhbTR, byteF4KXe7k, {from: accounts[3]});
		const bool5fF0Sy = await INSNWGovVi.transferFrom.call(addressXNWu8TX, addresshTTfWQj, uintQq6Pw7t, {from: accounts[4]});
	});

	it('test for INS', async () => {
		const uintU5qp9Pv = BigInt("1691")
		const stringqwVgSfF = "pij5aHth3bLgdtPw0FyirueXHJizBzq4MuefvsrZwd4gSeikWp2ZtNa"
		const stringqIMKFrF = "nPMBy3qUYWovc4fnZGKRiHPmlEoEYXBiyWsbanDONvJF6XcmR38b6gEqILtcA"
		const INSocjf5ag = await INS.new(uintU5qp9Pv, stringqwVgSfF, stringqIMKFrF, {from: accounts[0]});
		const uintavv4Yt = BigInt("1300")
		const addresszMGVDSc = accounts[4]
		const uintatcPZ9 = BigInt("1266")
		const addressxB697zP = accounts[0]
		const addressdnUD7Sn = accounts[3]
		const uintvTuau6n = BigInt("734")
		const addressmDCjrfr = accounts[3]
		const byteiP6nheA = "0x1f1d1302170c120b1f191c08141b1618000d0d1c151e09171e0b1b0519071c"
		const uintB4zdYWF = BigInt("944")
		const addressxH8FOY8 = accounts[3]
		const byteXX3ugzu = "0x0214"
		const uintNTFuoB7 = BigInt("132")
		const addresskN6PWW = accounts[5]
//		const boolPdZef96 = await INSocjf5ag.transfer.call(addresszMGVDSc, uintavv4Yt, {from: accounts[1]});
//		const boolhLWgAJT = await INSocjf5ag.transferFrom.call(addressdnUD7Sn, addressxB697zP, uintatcPZ9, {from: accounts[0]});
//		const boolLJZYBxF = await INSocjf5ag.approve.call(addressmDCjrfr, uintvTuau6n, {from: accounts[1]});
//		const boolXTXSWAa = await INSocjf5ag.approveAndCall.call(addressxH8FOY8, uintB4zdYWF, byteiP6nheA, {from: accounts[2]});
//		const boolPv5qPy9 = await INSocjf5ag.approveAndCall.call(addresskN6PWW, uintNTFuoB7, byteXX3ugzu, {from: accounts[4]});

		await expect(INSocjf5ag.transfer.call(addresszMGVDSc, uintavv4Yt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintRyonHtT = BigInt("184")
		const stringYgpcTaX = "dSSLEMpHqF5ffoBuV8kRcGQn5eoc6mdpFgVd3awVTohoMoWw9B1SntaK1J1StvAaQPg"
		const stringmegeqQN = "hLtEE6WZ96JzEV49Xw"
		const INSJf5B5h = await INS.new(uintRyonHtT, stringYgpcTaX, stringmegeqQN, {from: accounts[2]});
		const uintbyJHXpj = BigInt("14")
		const addressDp0COb5 = accounts[0]
		const uintpBOzmp7 = BigInt("529")
		const addresswVPmIlA = "0x0000000000000000000000000000000000000001"
		const boolFojqTLR = await INSJf5B5h.approve.call(addressDp0COb5, uintbyJHXpj, {from: accounts[2]});
		const boolgsUd6iC = await INSJf5B5h.approve.call(addresswVPmIlA, uintpBOzmp7, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolFojqTLR, true)
		assert.equal(boolgsUd6iC, true)
	});

	it('test for INS', async () => {
		const uintJYf7DD = BigInt("789")
		const stringJq6TXfX = "7OuheD1m7d0RyLHBp6YVPQaTbeMeH5UW9EW1FntzUyGhxhmam5iq1Nx5jgOWGuRRLzNichp4dnjpeNL5F9zUzaGKroseEeORC"
		const stringwS8Z2j3 = "84EQcbf6IxJ7uNqJ13yEpRCMQN2"
		const INSqzqy0zA = await INS.new(uintJYf7DD, stringJq6TXfX, stringwS8Z2j3, {from: accounts[0]});
		const uinteFIjm0f = BigInt("175")
		const uintLGqPm6I = BigInt("527")
		const addressq34AWKi = accounts[2]
		const addresswLZXnnQ = accounts[3]
		const uintdtWPlKU = BigInt("1882")
		const addressa4aaERc = accounts[1]
//		const boolqIgsi9w = await INSqzqy0zA.burn.call(uinteFIjm0f, {from: accounts[1]});
//		const boolPpECtUg = await INSqzqy0zA.transferFrom.call(addresswLZXnnQ, addressq34AWKi, uintLGqPm6I, {from: accounts[2]});
//		const boolPkNBwyW = await INSqzqy0zA.burnFrom.call(addressa4aaERc, uintdtWPlKU, {from: accounts[2]});

		await expect(INSqzqy0zA.burn.call(uinteFIjm0f, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintaI8l8pC = BigInt("201")
		const stringd3Tqol = "B181XgPVjzlFMp7svw0nvPtb8chd8LylcKghbSwfjiqa284eJwR"
		const stringB4Y4nD7 = "IV9hW4tOMTzs7BscwiKCmaNsbIWAdRzRNzJMAGy8RE90Hsh"
		const INSagXQxFv = await INS.new(uintaI8l8pC, stringd3Tqol, stringB4Y4nD7, {from: accounts[2]});
		const byteWCKIja0 = "0x0213170c120417"
		const uintohv0bQy = BigInt("534")
		const addressYx8RRNF = accounts[0]
		const uintVwoVy0b = BigInt("692")
		const addressIJLoJkl = accounts[0]
		const uintBxGUwP9 = BigInt("1586")
		const addressrAOb3xu = accounts[1]
		const uintc5FFBGN = BigInt("1699")
		const addressquWyUgB = accounts[3]
//		const boolPuzhn2Y = await INSagXQxFv.approveAndCall.call(addressYx8RRNF, uintohv0bQy, byteWCKIja0, {from: accounts[5]});
//		const boolFz7bpR = await INSagXQxFv.burnFrom.call(addressIJLoJkl, uintVwoVy0b, {from: accounts[4]});
//		const boolE9DRSkl = await INSagXQxFv.burnFrom.call(addressrAOb3xu, uintBxGUwP9, {from: accounts[2]});
//		const boolbba3cmv = await INSagXQxFv.approve.call(addressquWyUgB, uintc5FFBGN, {from: accounts[0]});

		await expect(INSagXQxFv.approveAndCall.call(addressYx8RRNF, uintohv0bQy, byteWCKIja0, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintiOlVjQA = BigInt("727")
		const stringY6ArA7 = "AovNj37xgEAYBHHS3fQ3E8aN5uLNMN7jKOfM4"
		const stringIfOcLQ1 = "fAhJjWWFtGSOIqDAF9tbtaw"
		const INSyTCpnvV = await INS.new(uintiOlVjQA, stringY6ArA7, stringIfOcLQ1, {from: accounts[5]});
		const uintnEeJN7v = BigInt("284")
		const addressKLcHtMj = accounts[2]
		const addressUgAmrqh = accounts[0]
		const uintj09X0bU = BigInt("1127")
		const uintI4uXYH5 = BigInt("1831")
		const addressBLGv5Eo = accounts[1]
		const uintAoOsd0l = BigInt("587")
		const addressg3e6IlO = accounts[1]
//		const boolQkKMKYP = await INSyTCpnvV.transferFrom.call(addressUgAmrqh, addressKLcHtMj, uintnEeJN7v, {from: accounts[1]});
//		const booljXAnS2V = await INSyTCpnvV.burn.call(uintj09X0bU, {from: accounts[5]});
//		const boolMaNqZsO = await INSyTCpnvV.transfer.call(addressBLGv5Eo, uintI4uXYH5, {from: accounts[3]});
//		const boolr1AweeS = await INSyTCpnvV.approve.call(addressg3e6IlO, uintAoOsd0l, {from: accounts[3]});

		await expect(INSyTCpnvV.transferFrom.call(addressUgAmrqh, addressKLcHtMj, uintnEeJN7v, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintcyCYp8A = BigInt("1227")
		const stringhgoC3cK = "EMfOnnBBVhsYN9VhpvsCSnQrzeO6op6KvH"
		const stringovAMQRU = "mC1fp9hQPTO3AS5X3BFNJ1IiFabIS19uT1HPoxkris8Qv8nqNIXk29BMdqUQnX9g1M3tTIQ6gDbi2bs5Hdkowikqhr"
		const INSqttlXuv = await INS.new(uintcyCYp8A, stringhgoC3cK, stringovAMQRU, {from: accounts[2]});
		const uintE2RxGMv = BigInt("1964")
		const addressTWS8TMp = accounts[1]
		const uintXvJPOC = BigInt("937")
		const addresso3qXi4Z = accounts[1]
//		const boolNf4CBb1 = await INSqttlXuv.burnFrom.call(addressTWS8TMp, uintE2RxGMv, {from: accounts[3]});
//		const boolsjSXhtZ = await INSqttlXuv.approve.call(addresso3qXi4Z, uintXvJPOC, {from: "0x0000000000000000000000000000000000000001"});

		await expect(INSqttlXuv.burnFrom.call(addressTWS8TMp, uintE2RxGMv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})