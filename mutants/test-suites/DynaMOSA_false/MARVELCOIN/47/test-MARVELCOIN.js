const MARVELCOIN = artifacts.require("MARVELCOIN");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MARVELCOIN', (accounts) => {
	it('test for MARVELCOIN', async () => {
		const uintyIXGtgV = BigInt("1650")
		const stringljqlHKG = "ZHCrXaX"
		const stringOr0A94 = "zm2fsw"
		const MARVELCOINxOsZaWO = await MARVELCOIN.new(uintyIXGtgV, stringljqlHKG, stringOr0A94, {from: accounts[2]});
		const uintVs6f4j0 = BigInt("2035")
		const addresseKOxQs3 = accounts[0]
		const uintZ5lB8kU = BigInt("616")
		const uintho35AfF = BigInt("1578")
		const uintzgDm4Vi = BigInt("1345")
		const addressGOkUl0v = accounts[4]
		const uintcNHBNxP = BigInt("801")
		const addressNGiupTK = accounts[4]
		const boolW0Z207T = await MARVELCOINxOsZaWO.approve.call(addresseKOxQs3, uintVs6f4j0, {from: accounts[4]});
		const boolmzJrYqk = await MARVELCOINxOsZaWO.burn.call(uintZ5lB8kU, {from: accounts[2]});
		const boolrDY63MP = await MARVELCOINxOsZaWO.burn.call(uintho35AfF, {from: accounts[2]});
//		const booln8JMMrA = await MARVELCOINxOsZaWO.transfer.call(addressGOkUl0v, uintzgDm4Vi, {from: accounts[4]});
//		const boolurZ7BLJ = await MARVELCOINxOsZaWO.burnFrom.call(addressNGiupTK, uintcNHBNxP, {from: accounts[2]});

		assert.equal(boolW0Z207T, true)
		assert.equal(boolmzJrYqk, true)
		assert.equal(boolrDY63MP, true)
		await expect(MARVELCOINxOsZaWO.transfer.call(addressGOkUl0v, uintzgDm4Vi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintnyLrBeR = BigInt("1283")
		const stringrgnOy8M = "h5lvrSJ9so13wZcyNbYsTbHM4oQNLqyqLzzl62kklxL"
		const stringMxECUt2 = "mCtcuelCNbkP4ofGHkSrGBInmSFwkgNPipvO4HTVEkPDXuumQCDMS8SsmU6RTwbjzic1jmIHBDr7TrqdJdJrMzwlXgkc"
		const MARVELCOINtnBTfoz = await MARVELCOIN.new(uintnyLrBeR, stringrgnOy8M, stringMxECUt2, {from: accounts[1]});
		const uintTvNf2RI = BigInt("174")
		const addressVJbzMPm = accounts[1]
		const addressaJMJAnM = accounts[2]
		const uintzrK3F5Q = BigInt("1830")
		const addressJRNXvPw = accounts[2]
//		const boolvG7Fy3k = await MARVELCOINtnBTfoz.transferFrom.call(addressaJMJAnM, addressVJbzMPm, uintTvNf2RI, {from: accounts[3]});
//		const bool0Sg3Tx = await MARVELCOINtnBTfoz.approve.call(addressJRNXvPw, uintzrK3F5Q, {from: accounts[3]});

		await expect(MARVELCOINtnBTfoz.transferFrom.call(addressaJMJAnM, addressVJbzMPm, uintTvNf2RI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintBrL02TY = BigInt("1943")
		const stringMSKMEqV = "JlcmeaTJqQKFmcpffyuhnVzaZralngmtVXfZOe3qXhY2ZjmVqtm"
		const stringHtmz0e = "l7mj8XoQ8A7Fv5VTDJDw6yv7OQjYt"
		const MARVELCOINVIziIzy = await MARVELCOIN.new(uintBrL02TY, stringMSKMEqV, stringHtmz0e, {from: accounts[2]});
		const uintgOhLKXt = BigInt("69")
		const addressuS7EK10 = accounts[4]
		const uintQKKq0pI = BigInt("317")
		const addressTOXfuo = accounts[3]
		const addressH4hUaB = accounts[1]
		const uintOSTmjBl = BigInt("1607")
		const addresse9tI8U = accounts[5]
//		const boolFKL2n1m = await MARVELCOINVIziIzy.burnFrom.call(addressuS7EK10, uintgOhLKXt, {from: accounts[2]});
//		const boolyUjWGUA = await MARVELCOINVIziIzy.transferFrom.call(addressH4hUaB, addressTOXfuo, uintQKKq0pI, {from: "0x0000000000000000000000000000000000000001"});
//		const boolwSaUdCO = await MARVELCOINVIziIzy.transfer.call(addresse9tI8U, uintOSTmjBl, {from: accounts[4]});

		await expect(MARVELCOINVIziIzy.burnFrom.call(addressuS7EK10, uintgOhLKXt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintFomM90U = BigInt("717")
		const stringFrbuvqe = "3qKzWgC61nehycOTYcrVmHJMbyBR7bPg7GqalVX49jzybffnCVBr186tb64pHlNTkO3KKBR9"
		const stringibRExtj = "e27OqL81w1WT1JvMinTx"
		const MARVELCOINf2SHKe7 = await MARVELCOIN.new(uintFomM90U, stringFrbuvqe, stringibRExtj, {from: accounts[5]});
		const byteTcmbsvs = "0x0118131411131f0b1a0e020a1e02121d121107100c101918010707000314"
		const uint2kKs1V = BigInt("1271")
		const addressT7ufwAf = accounts[3]
		const uintC7bxknA = BigInt("1861")
		const addressJjeXqlq = accounts[2]
		const uintzAPcleD = BigInt("1147")
		const addressNooOKze = accounts[4]
//		const boolt5mig5L = await MARVELCOINf2SHKe7.approveAndCall.call(addressT7ufwAf, uint2kKs1V, byteTcmbsvs, {from: accounts[1]});
//		const boolV1rXfhu = await MARVELCOINf2SHKe7.transfer.call(addressJjeXqlq, uintC7bxknA, {from: accounts[2]});
//		const boolgH5F6LZ = await MARVELCOINf2SHKe7.burnFrom.call(addressNooOKze, uintzAPcleD, {from: accounts[4]});

		await expect(MARVELCOINf2SHKe7.approveAndCall.call(addressT7ufwAf, uint2kKs1V, byteTcmbsvs, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintPIJOZ7 = BigInt("101")
		const stringZgFldsq = "uJ3aXMArkHJS98L609cImtEHCDRKtcNOPzwmwiFk3xosUBeuJqcRagTE3AXDyBt53pRtQwArknnfccHiHrKKlX3o"
		const stringfTcBNVv = "e72M43SUmy8kiPDDMHmmEsP1h1c17VNAVjyXEcjBcPj8bfC8KTQR9gt4Aqthv7uYJ3HlU9gmJYoiadCQyIgISqW96dt"
		const MARVELCOINTcHNUox = await MARVELCOIN.new(uintPIJOZ7, stringZgFldsq, stringfTcBNVv, {from: "0x0000000000000000000000000000000000000001"});
		const uintSs0W1x4 = BigInt("1473")
		const uint7qY5Bn = BigInt("1990")
		const addressQYwr5ua = accounts[2]
		const addressJu9qtT1 = accounts[0]
		const uinthncVZOv = BigInt("1406")
		const addresspomBan = accounts[2]
		const uintzsEMYk4 = BigInt("374")
		const uintIQYLqsj = BigInt("181")
		const byteJ9JzECI = "0x150e15031f16041a0519101707"
		const uintijgzt0 = BigInt("1674")
		const addressJKaoTes = accounts[2]
		const boolAUQe8eZ = await MARVELCOINTcHNUox.burn.call(uintSs0W1x4, {from: accounts[2]});
		const boolLAbeNvG = await MARVELCOINTcHNUox.transferFrom.call(addressJu9qtT1, addressQYwr5ua, uint7qY5Bn, {from: accounts[3]});
		const boolzaAj3Cy = await MARVELCOINTcHNUox.burnFrom.call(addresspomBan, uinthncVZOv, {from: accounts[5]});
		const boolLjQoBs0 = await MARVELCOINTcHNUox.burn.call(uintzsEMYk4, {from: accounts[2]});
		const boolbZoTXQZ = await MARVELCOINTcHNUox.burn.call(uintIQYLqsj, {from: accounts[3]});
		const booliEhbqdz = await MARVELCOINTcHNUox.approveAndCall.call(addressJKaoTes, uintijgzt0, byteJ9JzECI, {from: accounts[3]});
	});
})