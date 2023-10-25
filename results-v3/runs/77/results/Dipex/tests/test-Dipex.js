const Dipex = artifacts.require("Dipex");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dipex', (accounts) => {
	it('test for Dipex', async () => {
		const stringZyytSBU = "eblSVcuFsnYROpLVt7kNXZRsbeH"
		const stringGQtH4g3 = "qontx98R8TBBxs498qefOqlXRiuS2hig"
		const uintrFKCjL3 = BigInt("1570")
		const DipexzAY5Nam = await Dipex.new(stringZyytSBU, stringGQtH4g3, uintrFKCjL3, {from: accounts[5]});
		const address5UI2Cc = accounts[2]
		const uintf0OK3uq = BigInt("1024")
		const address23GpbN = accounts[0]
		const addressPOvyRzE = accounts[4]
		const booleMMiFX = await DipexzAY5Nam.transferownership.call(address5UI2Cc, {from: accounts[2]});
		const boolmp65rI2 = await DipexzAY5Nam.approveAndCall.call(address23GpbN, uintf0OK3uq, {from: accounts[2]});
		const boolMh9cveW = await DipexzAY5Nam.transferownership.call(addressPOvyRzE, {from: accounts[2]});

		await expect(DipexzAY5Nam.transferownership.call(address5UI2Cc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringCBJDeoy = "vl7the74yeEVWkMIrsOPw4QWBdGQLnsgR471EHq1mjmlnFDHLkCmMjXRuwul5aUs7vEo7IbGi2vKxDHNTrTbxv2x"
		const stringmhp44KI = "L7JiQcUEDMDkw4UJKEydoc3x"
		const uintxbG0T2S = BigInt("1720")
		const DipexfEdaaTk = await Dipex.new(stringCBJDeoy, stringmhp44KI, uintxbG0T2S, {from: accounts[1]});
		const uintF3bUKjL = BigInt("1302")
		const addressjwMN38 = "0x0000000000000000000000000000000000000001"
		const addressEsAwOAJ = accounts[1]
		const uint6DLZpV = BigInt("1166")
		const addressJKfbcCh = accounts[3]
		const uintiysTeO8 = BigInt("333")
		const addressSqcU5N3 = "0x0000000000000000000000000000000000000001"
		const boolPcjhxA = await DipexfEdaaTk.transferFrom.call(addressEsAwOAJ, addressjwMN38, uintF3bUKjL, {from: accounts[2]});
		const boolkZKa8JW = await DipexfEdaaTk.approveAndCall.call(addressJKfbcCh, uint6DLZpV, {from: accounts[0]});
		const boolu0ngvxn = await DipexfEdaaTk.approve.call(addressSqcU5N3, uintiysTeO8, {from: accounts[3]});

		await expect(DipexfEdaaTk.transferFrom.call(addressEsAwOAJ, addressjwMN38, uintF3bUKjL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringsiZgLAU = "OfRJ5j67DdKpTxD6GqK916VN5J9VFb2CKmmdqBtjD6ZWVYUXpVEub1ftLbgyYE7Ak8mH6yA8iSNYEBcxBdqcVXJ4ATXP"
		const stringsZtd0YS = "nQRwhE9vvt"
		const uintQIpM7C = BigInt("555")
		const DipexBkIGXNQ = await Dipex.new(stringsiZgLAU, stringsZtd0YS, uintQIpM7C, {from: accounts[3]});
		const uintd1Ie7gm = BigInt("961")
		const addressORk4sIn = accounts[5]
		const addressNJzXMcN = accounts[5]
		const uintJqHIPJZ = BigInt("167")
		const addressQx4Ezez = accounts[5]
		const addressl8gSmgM = accounts[3]
		const boolGVfrsRU = await DipexBkIGXNQ.approveAndCall.call(addressORk4sIn, uintd1Ie7gm, {from: accounts[5]});
		const boolue1zI87 = await DipexBkIGXNQ.transferownership.call(addressNJzXMcN, {from: accounts[1]});
		const boolbHeCDtI = await DipexBkIGXNQ.transferFrom.call(addressl8gSmgM, addressQx4Ezez, uintJqHIPJZ, {from: accounts[5]});

		await expect(DipexBkIGXNQ.approveAndCall.call(addressORk4sIn, uintd1Ie7gm, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringcReoOX = "o0TQhXvyQ6ChgxRdsEm59iAUSnfIhyEBDqj7a6ujti7mTqYy"
		const stringzQWp08Q = "OcwO15q4qvRnVCBxs3qYHqDut1g8pFxnfGR1UxjGm0ADZLMunxzE0Xsh1gTPYbZAa"
		const uintCQ7kag = BigInt("1726")
		const DipexjsGs2NT = await Dipex.new(stringcReoOX, stringzQWp08Q, uintCQ7kag, {from: accounts[0]});
		const uintHQqtMGg = BigInt("1484")
		const addressG0pxKwR = accounts[0]
		const addressTwU7uKd = accounts[3]
		const uintAPjQ1a7 = BigInt("956")
		const addresseve3gl = accounts[2]
		const addressfXtcauG = accounts[2]
		const addressNbcilm = accounts[0]
		const booltqtfcGU = await DipexjsGs2NT.approve.call(addressG0pxKwR, uintHQqtMGg, {from: "0x0000000000000000000000000000000000000001"});
		const bool2L6BKS = await DipexjsGs2NT.transferownership.call(addressTwU7uKd, {from: accounts[5]});
		const boolSqBuLX = await DipexjsGs2NT.transferFrom.call(addressfXtcauG, addresseve3gl, uintAPjQ1a7, {from: accounts[3]});
		const boolKsnbxR = await DipexjsGs2NT.transferownership.call(addressNbcilm, {from: accounts[5]});

		assert.equal(booltqtfcGU, true)
		await expect(DipexjsGs2NT.transferownership.call(addressTwU7uKd, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const string0uN97B = "2BMBI2kQuPUaJo3kfRa8Tv5TlBDj8s"
		const stringKNuvOzV = "X9RnxfppvxFoo5p"
		const uintB5SmqGG = BigInt("88")
		const Dipexg5Wv2rt = await Dipex.new(string0uN97B, stringKNuvOzV, uintB5SmqGG, {from: "0x0000000000000000000000000000000000000001"});
		const addressDDymKUx = accounts[2]
		const uintbPJribG = BigInt("921")
		const addresszWNBmd5 = accounts[2]
		const uintpKovuVL = BigInt("674")
		const addressCG4BRtN = accounts[2]
		const uintRuIjCmB = BigInt("807")
		const addressvrgv609 = accounts[4]
		const boolRFxX4pO = await Dipexg5Wv2rt.transferownership.call(addressDDymKUx, {from: accounts[4]});
		const boolAOUqxjI = await Dipexg5Wv2rt.approve.call(addresszWNBmd5, uintbPJribG, {from: accounts[1]});
		const boollAhABYy = await Dipexg5Wv2rt.approveAndCall.call(addressCG4BRtN, uintpKovuVL, {from: accounts[3]});
		const boolsDToENe = await Dipexg5Wv2rt.approveAndCall.call(addressvrgv609, uintRuIjCmB, {from: accounts[4]});
	});

	it('test for Dipex', async () => {
		const stringXYfenyN = "WEN3DjAUPnQc9fNe048uACTo1X9LJlObw8rOEiCaiRBmg4K"
		const stringRrdaDRW = "PzCv3mxVoxP2KAxwflDpdcThBe5RO"
		const uint7uZxlq = BigInt("25")
		const DipexkLE4qfh = await Dipex.new(stringXYfenyN, stringRrdaDRW, uint7uZxlq, {from: accounts[2]});
		const uintLL5hed = BigInt("347")
		const addressTGG8Hd6 = accounts[3]
		const addressECGcB7s = accounts[2]
		const uintJ4WBpfO = BigInt("1219")
		const addressVIOI3Ef = accounts[5]
		const addressWzyZalQ = accounts[4]
		const uintbAIsXvQ = BigInt("1099")
		const addressvh1QhRr = accounts[1]
		const uintbUdyYHV = BigInt("1635")
		const addressTk7aN7C = "0x0000000000000000000000000000000000000001"
		const uintqGGfAik = BigInt("1598")
		const addressWxkEAF0 = accounts[3]
		const boolx7iIMlW = await DipexkLE4qfh.transferFrom.call(addressECGcB7s, addressTGG8Hd6, uintLL5hed, {from: accounts[2]});
		const boolppI65wV = await DipexkLE4qfh.transferFrom.call(addressWzyZalQ, addressVIOI3Ef, uintJ4WBpfO, {from: accounts[2]});
		const boolngGpM42 = await DipexkLE4qfh.approve.call(addressvh1QhRr, uintbAIsXvQ, {from: accounts[3]});
		const boolUfoZtDn = await DipexkLE4qfh.approveAndCall.call(addressTk7aN7C, uintbUdyYHV, {from: accounts[0]});
		const boolTJTpA8k = await DipexkLE4qfh.transfer.call(addressWxkEAF0, uintqGGfAik, {from: accounts[5]});

		assert.equal(boolx7iIMlW, true)
		await expect(DipexkLE4qfh.transferFrom.call(addressWzyZalQ, addressVIOI3Ef, uintJ4WBpfO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringXYfenyN = "WEN3DjAUPnQc9fNe048uACTo1X9LJlObw8rOEiCaiRBmg4K"
		const stringRrdaDRW = "PzCv3mxVoxP2KAxwflDpdcThBe5RO"
		const uintP5vOXCn = BigInt("25")
		const DipexkLE4qfh = await Dipex.new(stringXYfenyN, stringRrdaDRW, uintP5vOXCn, {from: accounts[2]});
		const uintY7kSrg = BigInt("870")
		const addresspRKWF28 = accounts[3]
		const uintZu0PXfm = BigInt("1905")
		const addressQlqEe58 = accounts[4]
		const uintJJ9kyU8 = BigInt("347")
		const addressQmf3UX = accounts[3]
		const addressAMe4wpL = accounts[2]
		const uintTiunTCu = BigInt("1598")
		const addressrGiJaoc = accounts[3]
		const uintevPz3Lt = BigInt("1816")
		const addressO5N8rex = accounts[1]
		const boolX9Sh9zD = await DipexkLE4qfh.approve.call(addresspRKWF28, uintY7kSrg, {from: "0x0000000000000000000000000000000000000001"});
		const boolsNQmJcf = await DipexkLE4qfh.approve.call(addressQlqEe58, uintZu0PXfm, {from: accounts[1]});
		const boolx7iIMlW = await DipexkLE4qfh.transferFrom.call(addressAMe4wpL, addressQmf3UX, uintJJ9kyU8, {from: accounts[2]});
		const boolTJTpA8k = await DipexkLE4qfh.transfer.call(addressrGiJaoc, uintTiunTCu, {from: accounts[5]});
		const booleNSAi37 = await DipexkLE4qfh.transfer.call(addressO5N8rex, uintevPz3Lt, {from: accounts[2]});

		assert.equal(boolX9Sh9zD, true)
		assert.equal(boolsNQmJcf, true)
		assert.equal(boolx7iIMlW, true)
		await expect(DipexkLE4qfh.transfer.call(addressrGiJaoc, uintTiunTCu, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringZyytSBU = "eblSVcuFsnYROpLVt7kNXZRsbeH"
		const stringGQtH4g3 = "qontx98R8TBBxs498qefOqlXRiuS2hig"
		const uintXev1Co = BigInt("1570")
		const DipexzAY5Nam = await Dipex.new(stringZyytSBU, stringGQtH4g3, uintXev1Co, {from: accounts[5]});
		const addressdPzyX5J = accounts[3]
		const addresslTL7PwU = accounts[2]
		const uintH8IWjbl = BigInt("7")
		const addressiLkz4bJ = accounts[0]
		const boolI4tf397 = await DipexzAY5Nam.transferownership.call(addressdPzyX5J, {from: accounts[5]});
		const booleMMiFX = await DipexzAY5Nam.transferownership.call(addresslTL7PwU, {from: accounts[2]});
		const booleUuZAny = await DipexzAY5Nam.approve.call(addressiLkz4bJ, uintH8IWjbl, {from: accounts[4]});

		assert.equal(boolI4tf397, true)
		await expect(DipexzAY5Nam.transferownership.call(addresslTL7PwU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringXYfenyN = "WEN3DjAUPnQc9fNe048uACTo1X9LJlObw8rOEiCaiRBmg4K"
		const stringRrdaDRW = "PzCv3mxVoxP2KAxwflDpdcThBe5RO"
		const uintkgh7ETe = BigInt("25")
		const DipexkLE4qfh = await Dipex.new(stringXYfenyN, stringRrdaDRW, uintkgh7ETe, {from: accounts[2]});
		const uintQQtwIee = BigInt("292")
		const addressWATkxZa = accounts[2]
		const uintbTqvOnE = BigInt("1625")
		const addresswYynkE = accounts[4]
		const uintUftT7gg = BigInt("1010")
		const addresswSBbzH5 = accounts[1]
		const addressnKvmscf = accounts[3]
		const booldvYq1sT = await DipexkLE4qfh.approveAndCall.call(addressWATkxZa, uintQQtwIee, {from: accounts[2]});
		const boolTJTpA8k = await DipexkLE4qfh.transfer.call(addresswYynkE, uintbTqvOnE, {from: accounts[5]});
		const boolvw6RyCG = await DipexkLE4qfh.transferFrom.call(addressnKvmscf, addresswSBbzH5, uintUftT7gg, {from: accounts[3]});

		assert.equal(booldvYq1sT, true)
		await expect(DipexkLE4qfh.transfer.call(addresswYynkE, uintbTqvOnE, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringXYfenyN = "WEN3DjAUPnQc9fNe048uACTo1X9LJlObw8rOEiCaiRBmg4K"
		const stringRrdaDRW = "PzCv3mxVoxP2KAxwflDpdcThBe5RO"
		const uintaMDCKic = BigInt("25")
		const DipexkLE4qfh = await Dipex.new(stringXYfenyN, stringRrdaDRW, uintaMDCKic, {from: accounts[2]});
		const uintn2heLC = BigInt("0")
		const addressLoHnFhY = accounts[1]
		const uintJT9cymq = BigInt("1625")
		const addressqp6zxoz = accounts[3]
		const uintwwPKpUh = BigInt("862")
		const addressdHc8ve = accounts[2]
		const boolVeQ2zJS = await DipexkLE4qfh.transfer.call(addressLoHnFhY, uintn2heLC, {from: accounts[1]});
		const boolTJTpA8k = await DipexkLE4qfh.transfer.call(addressqp6zxoz, uintJT9cymq, {from: accounts[5]});
		const boolBnGBBGT = await DipexkLE4qfh.approve.call(addressdHc8ve, uintwwPKpUh, {from: accounts[0]});

		assert.equal(boolVeQ2zJS, true)
		await expect(DipexkLE4qfh.transfer.call(addressqp6zxoz, uintJT9cymq, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringJDl8hXv = "NZKs2uL0QjctEk79wJE8GEAR2DHLdY6f1RdudYn4OrV28S6jcxr1cn5M9J1s"
		const stringEjeCba4 = "id5k"
		const uintUgb8ADR = BigInt("1348")
		const DipexorwKHaw = await Dipex.new(stringJDl8hXv, stringEjeCba4, uintUgb8ADR, {from: accounts[1]});
		const uintYIANe93 = BigInt("0")
		const addresse8Dj9rU = accounts[4]
		const uintCSnmjU3 = BigInt("219")
		const addressLWxEPNN = accounts[4]
		const addressnT5VNYz = accounts[3]
		const boolC1Wu8Yb = await DipexorwKHaw.approveAndCall.call(addresse8Dj9rU, uintYIANe93, {from: accounts[1]});
		const bool0HJpCz = await DipexorwKHaw.transferFrom.call(addressnT5VNYz, addressLWxEPNN, uintCSnmjU3, {from: accounts[2]});

		assert.equal(boolC1Wu8Yb, true)
		await expect(DipexorwKHaw.transferFrom.call(addressnT5VNYz, addressLWxEPNN, uintCSnmjU3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})