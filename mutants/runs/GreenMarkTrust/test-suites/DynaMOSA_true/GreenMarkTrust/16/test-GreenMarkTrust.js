const GreenMarkTrust = artifacts.require("GreenMarkTrust");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GreenMarkTrust', (accounts) => {
	it('test for GreenMarkTrust', async () => {
		const uintXN9W8dr = BigInt("1967")
		const stringxPaZ9U8 = "tJhrFjY2BsvlKl95qE5HQW6T4cW8AptlBrsfLmlzmmzyTffm6dW6n8"
		const stringLir8VJ7 = "DGJ9truS9cxV2ivs1AT0Rjlumaqi2xJmLHVxnQfjFA87V4ZKAB5NTEBpSEfUVad7H9uCRMI6WMXITjeuTtJKIKa89O26O00"
		const GreenMarkTrustOLPKcIK = await GreenMarkTrust.new(uintXN9W8dr, stringxPaZ9U8, stringLir8VJ7, {from: accounts[5]});
		const uintjNRquO1 = BigInt("108")
		const addressRP8usBf = accounts[3]
		const addressU1meuVU = accounts[3]
		const uintDTcT3c8 = BigInt("1576")
		const address8U8mZa = "0x0000000000000000000000000000000000000001"
		const addressYgNw9uy = accounts[1]
		const uintPK4q4Zj = BigInt("26")
		const boolfi9kYbF = await GreenMarkTrustOLPKcIK.transferFrom.call(addressU1meuVU, addressRP8usBf, uintjNRquO1, {from: accounts[5]});
		const boolq5Pqr5N = await GreenMarkTrustOLPKcIK.transferFrom.call(addressYgNw9uy, address8U8mZa, uintDTcT3c8, {from: accounts[1]});
		const booli99p37d = await GreenMarkTrustOLPKcIK.burn.call(uintPK4q4Zj, {from: accounts[1]});

		await expect(GreenMarkTrustOLPKcIK.transferFrom.call(addressU1meuVU, addressRP8usBf, uintjNRquO1, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintN7Ja5w6 = BigInt("482")
		const stringjzCZ3XP = "zdhCU1zNkX6CJ8AFQPxa5n9XZVLuHPcDoU78b5RHKBjyqUQJJqNbvX4FP7WlfX4vz1rQDs74OLRNsM"
		const stringUi0J97q = "o7p580mzhRl7WNCW9RoQsXpcDMSsPuOdyPr6zbBVaL8ECau2Wyc8uGQzrOXS8Rb0axgrmMXgOMWlDhA92pC4cHgG4"
		const GreenMarkTrustjCSOlYm = await GreenMarkTrust.new(uintN7Ja5w6, stringjzCZ3XP, stringUi0J97q, {from: accounts[1]});
		const uintwU1SoKH = BigInt("170")
		const addressSYIiH1n = accounts[2]
		const uintXD03m8U = BigInt("237")
		const addresscwTWc8o = accounts[3]
		const boolw3oURDJ = await GreenMarkTrustjCSOlYm.transfer.call(addressSYIiH1n, uintwU1SoKH, {from: accounts[1]});
		const boolXlMDLja = await GreenMarkTrustjCSOlYm.approve.call(addresscwTWc8o, uintXD03m8U, {from: accounts[3]});

		assert.equal(boolXlMDLja, true)
		assert.equal(boolw3oURDJ, true)
	});

	it('test for GreenMarkTrust', async () => {
		const uintxnVNAsc = BigInt("836")
		const stringJNNErOe = "2MyowShYWdrnuFwkR4VUt83HonP7mFYtIx4HiohzF8LNLwyxyS9iGlOEDAwRhwNhSouoDh2FwM3HLGc68nSBfFjByysF"
		const stringvquH0IS = "2Oso63GykoVg4Kyy"
		const GreenMarkTrustUV5ccvj = await GreenMarkTrust.new(uintxnVNAsc, stringJNNErOe, stringvquH0IS, {from: accounts[1]});
		const byternmogP6 = "0x0f070c041c1d0b0611082000151e0016"
		const uintxliKDPt = BigInt("655")
		const addressatE0hI3 = accounts[1]
		const uintatfynsa = BigInt("430")
		const addresst3O1j6D = accounts[3]
		const addressblROVD = accounts[5]
		const uintRi0NXzq = BigInt("495")
		const addressHBb4kva = accounts[3]
		const addressPtyTMHs = accounts[0]
		const boolgUo8I9u = await GreenMarkTrustUV5ccvj.approveAndCall.call(addressatE0hI3, uintxliKDPt, byternmogP6, {from: accounts[2]});
		const boolxECqIXd = await GreenMarkTrustUV5ccvj.transferFrom.call(addressblROVD, addresst3O1j6D, uintatfynsa, {from: accounts[2]});
		const boolBpvOGBO = await GreenMarkTrustUV5ccvj.transferFrom.call(addressPtyTMHs, addressHBb4kva, uintRi0NXzq, {from: accounts[2]});

		await expect(GreenMarkTrustUV5ccvj.approveAndCall.call(addressatE0hI3, uintxliKDPt, byternmogP6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintyBaG6Cz = BigInt("306")
		const stringJlG213o = "1pnXot64nOSjeow9NiwEBexNFkKU1GKcDqeusbH9p1feLqyVjG6kxatKxe5Nvpt"
		const stringd8rR5y5 = "7NYSDKM6jDGOsEKE0cNaEb7dhmVJCDhbpY2YR8otJ7oMMWyFTxcPgMHTUHRSne6ojZ5DyRG9iCn8lyuR3oEkdQCXalOj"
		const GreenMarkTrusttvUELV = await GreenMarkTrust.new(uintyBaG6Cz, stringJlG213o, stringd8rR5y5, {from: accounts[3]});
		const uintpUJYRLw = BigInt("309")
		const uintu3zIotQ = BigInt("1180")
		const byteNcAeHIY = "0x0a111d1b170c1d14"
		const uintK4Zo0nD = BigInt("1840")
		const addressbYFNurf = accounts[4]
		const uintwfw6Zmu = BigInt("959")
		const addressW9i5Z1 = accounts[2]
		const uintgMLu5qA = BigInt("1477")
		const boolGoY66yk = await GreenMarkTrusttvUELV.burn.call(uintpUJYRLw, {from: accounts[0]});
		const boolnaTWP3i = await GreenMarkTrusttvUELV.burn.call(uintu3zIotQ, {from: accounts[1]});
		const booll9IkEOX = await GreenMarkTrusttvUELV.approveAndCall.call(addressbYFNurf, uintK4Zo0nD, byteNcAeHIY, {from: accounts[2]});
		const boolh7UivBj = await GreenMarkTrusttvUELV.approve.call(addressW9i5Z1, uintwfw6Zmu, {from: accounts[3]});
		const boolYHPiL9Y = await GreenMarkTrusttvUELV.burn.call(uintgMLu5qA, {from: accounts[1]});

		await expect(GreenMarkTrusttvUELV.burn.call(uintpUJYRLw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uint0UhJs1 = BigInt("1802")
		const stringcYuXlN1 = "mXCIaqoHsNSBSg8FcxmPaMDMxDH31UiY6tnrWUz7qR"
		const stringdMhpGZn = "UQN19Nyry7NdqsIt9xycaXwVcO03rUl3YWFjAdjpQsMMDf81yegQw3I84m0dyRifSgBe2VKn8tBORNDAgquR"
		const GreenMarkTrustCKcToqz = await GreenMarkTrust.new(uint0UhJs1, stringcYuXlN1, stringdMhpGZn, {from: accounts[1]});
		const uintWNiLPx = BigInt("782")
		const uintIKViQlb = BigInt("1393")
		const addresso3GWdZ3 = accounts[4]
		const uintq0v4hHu = BigInt("423")
		const addressziy7X32 = accounts[0]
		const uintVrWN0Lw = BigInt("539")
		const addressdA9mbAO = accounts[4]
		const boolQhRUty = await GreenMarkTrustCKcToqz.burn.call(uintWNiLPx, {from: accounts[1]});
		const booly1SaPTN = await GreenMarkTrustCKcToqz.burnFrom.call(addresso3GWdZ3, uintIKViQlb, {from: accounts[1]});
		const booliezrhMG = await GreenMarkTrustCKcToqz.approve.call(addressziy7X32, uintq0v4hHu, {from: accounts[0]});
		const boolDrWRfD = await GreenMarkTrustCKcToqz.approve.call(addressdA9mbAO, uintVrWN0Lw, {from: accounts[0]});

		assert.equal(boolQhRUty, true)
		await expect(GreenMarkTrustCKcToqz.burnFrom.call(addresso3GWdZ3, uintIKViQlb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintGOBKoA3 = BigInt("1941")
		const stringXeQSITw = "zcSzfA3TgW4bmubaCNYACwmIzTNkTX9DLK7gmjYJOHkwX9w7lCmxmXepXufnf7zPWyrgZlags9Vjpgz79"
		const stringlgCoUEL = "5xIJTv0Q5ClXJmh1zsybD7JdqdiQNcdlX9vWhYE9xKJ5JAGsvWMKiIdP"
		const GreenMarkTrustMZ5n1qj = await GreenMarkTrust.new(uintGOBKoA3, stringXeQSITw, stringlgCoUEL, {from: accounts[2]});
		const uintGt8wlaT = BigInt("329")
		const addressITUBbCy = accounts[2]
		const uintNEebdIi = BigInt("16")
		const boolG60FRwp = await GreenMarkTrustMZ5n1qj.burnFrom.call(addressITUBbCy, uintGt8wlaT, {from: accounts[1]});
		const boolOuR5P2y = await GreenMarkTrustMZ5n1qj.burn.call(uintNEebdIi, {from: accounts[1]});

		await expect(GreenMarkTrustMZ5n1qj.burnFrom.call(addressITUBbCy, uintGt8wlaT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintP9Vxtio = BigInt("1967")
		const stringxPaZ9U8 = "tJhrFjY2BsvlKl95qE5HQW6T4cW8AptlBrsfLmlzmmzyTffm6dW6n8"
		const stringLir8VJ7 = "DGJ9truS9cxV2ivs1AT0Rjlumaqi2xJmLHVxnQfjFA87V4ZKAB5NTEBpSEfUVad7H9uCRMI6WMXITjeuTtJKIKa89O26O00"
		const GreenMarkTrustOLPKcIK = await GreenMarkTrust.new(uintP9Vxtio, stringxPaZ9U8, stringLir8VJ7, {from: accounts[5]});
		const uintefSHYUy = BigInt("1576")
		const addresseza8QlK = "0x00000000000000000000000000000000000000-1"
		const addressiiCLjAm = accounts[1]
		const uintj6arlVQ = BigInt("262")
		const addresstzn9OHz = accounts[1]
		const uintLIUioqi = BigInt("1076")
		const addressPFNKnb6 = accounts[1]
		const boolq5Pqr5N = await GreenMarkTrustOLPKcIK.transferFrom.call(addressiiCLjAm, addresseza8QlK, uintefSHYUy, {from: accounts[1]});
		const boolCsRhKTq = await GreenMarkTrustOLPKcIK.approve.call(addresstzn9OHz, uintj6arlVQ, {from: accounts[2]});
		const boolrBCKuqJ = await GreenMarkTrustOLPKcIK.approve.call(addressPFNKnb6, uintLIUioqi, {from: accounts[4]});

		await expect(GreenMarkTrustOLPKcIK.transferFrom.call(addressiiCLjAm, addresseza8QlK, uintefSHYUy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uint0gM2IU = BigInt("1610")
		const stringfOHOLvT = "l5sN3E"
		const stringhM4dwIf = "DKCkGWklCMDl3aAw"
		const GreenMarkTrustMBniU3Z = await GreenMarkTrust.new(uint0gM2IU, stringfOHOLvT, stringhM4dwIf, {from: "0x0000000000000000000000000000000000000001"});
		const bytepjuZPQI = "0x121206100a0e12001a0d041410061f0c"
		const uintDvkGGwT = BigInt("1874")
		const addressyJ570y = accounts[3]
		const byteqW2C2b = "0x1404091c060019020a0106170616180b1f160b1d190609170f0e1c1e090903"
		const uintaXTxj9K = BigInt("1395")
		const addressEdK4yvO = accounts[3]
		const uintYTAyzsI = BigInt("174")
		const addressdZiayuI = accounts[1]
		const addressQQY1nPa = accounts[5]
		const uintLJukwCx = BigInt("1620")
		const addressPBykfCv = accounts[0]
		const addressEfNGlUc = accounts[0]
		const uintBW7upuQ = BigInt("833")
		const addressxWVQoI0 = accounts[0]
		const addresslW1CJhR = accounts[2]
		const uintDn0aOj = BigInt("1605")
		const boolIwLLEeJ = await GreenMarkTrustMBniU3Z.approveAndCall.call(addressyJ570y, uintDvkGGwT, bytepjuZPQI, {from: accounts[5]});
		const boolM8kfPwQ = await GreenMarkTrustMBniU3Z.approveAndCall.call(addressEdK4yvO, uintaXTxj9K, byteqW2C2b, {from: accounts[4]});
		const boolXQG6Gnp = await GreenMarkTrustMBniU3Z.transferFrom.call(addressQQY1nPa, addressdZiayuI, uintYTAyzsI, {from: accounts[0]});
		const boolklW7pk5 = await GreenMarkTrustMBniU3Z.transferFrom.call(addressEfNGlUc, addressPBykfCv, uintLJukwCx, {from: accounts[5]});
		const boolBT2XGA = await GreenMarkTrustMBniU3Z.transferFrom.call(addresslW1CJhR, addressxWVQoI0, uintBW7upuQ, {from: accounts[2]});
		const boolyE4dY0h = await GreenMarkTrustMBniU3Z.burn.call(uintDn0aOj, {from: accounts[2]});
	});
})