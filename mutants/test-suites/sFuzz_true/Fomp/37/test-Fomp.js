const Fomp = artifacts.require("Fomp");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Fomp', (accounts) => {
	it('test for Fomp', async () => {
		const addressCW9TmEQ = accounts[0]
		const FompXr0VNcD = await Fomp.new(addressCW9TmEQ, {from: accounts[1]});
		const addressIq4bYAZ = accounts[1]
		const addressoM1AsKX = accounts[1]
		const addresssYf9po0 = "0x0000000000000000000000000000000000000001"
		const uintHY639xD = BigInt("711")
		const addressERKqX3l = accounts[1]
		const uintjd9txD = await FompXr0VNcD.allowance.call(addressoM1AsKX, addressIq4bYAZ, {from: accounts[2]});
		const uint96JZWyfL = await FompXr0VNcD.getCurrentVotes.call(addresssYf9po0, {from: accounts[1]});
//		const boolDQ3TukE = await FompXr0VNcD.transfer.call(addressERKqX3l, uintHY639xD, {from: accounts[4]});

		assert.equal(uint96JZWyfL, BigInt("0"))
		assert.equal(uintjd9txD, BigInt("0"))
		await expect(FompXr0VNcD.transfer.call(addressERKqX3l, uintHY639xD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressobIlv1O = accounts[2]
		const FompcBJ57zn = await Fomp.new(addressobIlv1O, {from: accounts[2]});
		const uintbXR9Cye = BigInt("1497")
		const addressqlhiEp9 = accounts[3]
		const addressKLNjD5g = accounts[1]
		const addressObFqHzB = accounts[3]
		const uintzjuKQ4L = BigInt("1949")
		const addressTaVYIi5 = accounts[3]
		const uintenyAuhQ = BigInt("1962")
		const addressRJJm4eM = accounts[1]
		const addressfkEUhxQ = accounts[4]
//		const boolqb9V3Gl = await FompcBJ57zn.transferFrom.call(addressKLNjD5g, addressqlhiEp9, uintbXR9Cye, {from: "0x0000000000000000000000000000000000000001"});
//		const uint96fCBeN5b = await FompcBJ57zn.getCurrentVotes.call(addressObFqHzB, {from: accounts[4]});
//		const boollP9p0oU = await FompcBJ57zn.transfer.call(addressTaVYIi5, uintzjuKQ4L, {from: accounts[1]});
//		const boolq0CERZN = await FompcBJ57zn.approve.call(addressRJJm4eM, uintenyAuhQ, {from: accounts[3]});
//		const uint96jJnm0W = await FompcBJ57zn.getCurrentVotes.call(addressfkEUhxQ, {from: accounts[4]});

		await expect(FompcBJ57zn.transferFrom.call(addressKLNjD5g, addressqlhiEp9, uintbXR9Cye, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressUXedYwA = accounts[1]
		const Fompm437GPi = await Fomp.new(addressUXedYwA, {from: accounts[4]});
		const uintVn6BkKX = BigInt("84")
		const addressly9A2ex = accounts[4]
		const uintHL8KWjJ = BigInt("1583")
		const addressV5WE5G = accounts[4]
		const addresspO6wkJZ = accounts[3]
		const uintXxY4N0M = BigInt("1832")
		const addresslGPTc6F = accounts[0]
		const addressz11g6zg = accounts[3]
		const byteJugz1Nc = "0x14130a050c1d0a0e03081504060d000b0a131005201d060a0d0f011b0a0c0f11"
		const bytepUvGdTR = "0x0f14151014180f0701070a191f171f1c14131f1f120b131809180d05100a041b"
		const uintEX3En4m = BigInt("33")
		const uintVXnqDHl = BigInt("1209")
		const uintYORpgIy = BigInt("1223")
		const addresssUcMCwX = accounts[2]
		const boolz3AUdhX = await Fompm437GPi.approve.call(addressly9A2ex, uintVn6BkKX, {from: accounts[2]});
//		const boolx6PT3wv = await Fompm437GPi.transferFrom.call(addresspO6wkJZ, addressV5WE5G, uintHL8KWjJ, {from: accounts[2]});
//		const boolrGYdAr = await Fompm437GPi.approve.call(addresslGPTc6F, uintXxY4N0M, {from: accounts[3]});
//		const uint96OUkCS7X = await Fompm437GPi.getCurrentVotes.call(addressz11g6zg, {from: accounts[2]});
//		const addresspuKIApT = await Fompm437GPi.delegateBySig.call(addresssUcMCwX, uintYORpgIy, uintVXnqDHl, uintEX3En4m, bytepUvGdTR, byteJugz1Nc, {from: accounts[5]});

		assert.equal(boolz3AUdhX, true)
		await expect(Fompm437GPi.transferFrom.call(addresspO6wkJZ, addressV5WE5G, uintHL8KWjJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressjJiCzDa = accounts[5]
		const FompDYiKRjd = await Fomp.new(addressjJiCzDa, {from: accounts[4]});
		const uintMQODJi9 = BigInt("226")
		const addressEO7jS0v = accounts[4]
		const uintbgV62cd = BigInt("1470")
		const addressAbgk0tX = accounts[4]
		const uintJPD4lMf = BigInt("108")
		const addressXW4Qg6X = accounts[3]
		const addressujrpV03 = accounts[4]
		const uintdfkM7nN = BigInt("504")
		const addressy7U0YCg = accounts[2]
		const uint96O55RI81 = await FompDYiKRjd.getPriorVotes.call(addressEO7jS0v, uintMQODJi9, {from: "0x0000000000000000000000000000000000000001"});
//		const boolLxLNlDs = await FompDYiKRjd.transfer.call(addressAbgk0tX, uintbgV62cd, {from: accounts[4]});
//		const boolojtrAz = await FompDYiKRjd.transfer.call(addressXW4Qg6X, uintJPD4lMf, {from: accounts[0]});
//		const uintVyvd40 = await FompDYiKRjd.balanceOf.call(addressujrpV03, {from: accounts[1]});
//		const boolMilsecn = await FompDYiKRjd.transfer.call(addressy7U0YCg, uintdfkM7nN, {from: accounts[0]});

		assert.equal(uint96O55RI81, BigInt("0"))
		await expect(FompDYiKRjd.transfer.call(addressAbgk0tX, uintbgV62cd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressTKGcb0i = accounts[4]
		const Fompo7wxFTs = await Fomp.new(addressTKGcb0i, {from: "0x0000000000000000000000000000000000000001"});
		const byteANNL0cR = "0x041e03030f0b190a170b171e09091e0b1b0418110d1e12151015121409091918"
		const byteiS0SW96 = "0x0a1a1b1110120815070d06140d041f1a1d090c030a1f0417090017140f060902"
		const uintRZmrGdJ = BigInt("143")
		const uintxETSiNa = BigInt("1896")
		const uintoZFkZ1y = BigInt("1096")
		const addressZJ5z1pZ = accounts[1]
		const uintPI135Mh = BigInt("922")
		const addresskM4lFR = accounts[1]
		const addressTR78tKI = accounts[2]
		const addressWS53223 = await Fompo7wxFTs.delegateBySig.call(addressZJ5z1pZ, uintoZFkZ1y, uintxETSiNa, uintRZmrGdJ, byteiS0SW96, byteANNL0cR, {from: accounts[3]});
		const boolxfoZDLB = await Fompo7wxFTs.transferFrom.call(addressTR78tKI, addresskM4lFR, uintPI135Mh, {from: accounts[5]});
	});

	it('test for Fomp', async () => {
		const addresszVXWruB = accounts[2]
		const FompfHFhU6l = await Fomp.new(addresszVXWruB, {from: accounts[4]});
		const addressAyD0FpQ = accounts[2]
		const uintaU8UPX = BigInt("1225")
		const addressoT6psSZ = accounts[4]
		const addresssEjGnBF = "0x0000000000000000000000000000000000000001"
		const addressJI1Nb6G = accounts[4]
		const uintRTscA9k = await FompfHFhU6l.balanceOf.call(addressAyD0FpQ, {from: accounts[5]});
		const boolmqdBw4e = await FompfHFhU6l.approve.call(addressoT6psSZ, uintaU8UPX, {from: accounts[2]});
		const uint96bVWpSWX = await FompfHFhU6l.getCurrentVotes.call(addresssEjGnBF, {from: accounts[1]});
		const uintc5pw3Zk = await FompfHFhU6l.balanceOf.call(addressJI1Nb6G, {from: accounts[3]});

		assert.equal(boolmqdBw4e, true)
		assert.equal(uint96bVWpSWX, BigInt("0"))
		assert.equal(uintRTscA9k, BigInt("1000000000000000000000000"))
		assert.equal(uintc5pw3Zk, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressaHsT8k = accounts[2]
		const FompJWRKurD = await Fomp.new(addressaHsT8k, {from: accounts[1]});
		const addressyq5SNff = accounts[2]
		const addressGQb0P4i = accounts[0]
		const addressS0reEZZ = "0x0000000000000000000000000000000000000001"
		const bytensPzlX = "0x1716040b1008050c13190c1f001e02081b16080305110407141e0c1314080b1d"
		const bytefBW9h7o = "0x1d190f0a04161f101c1316041018190b0d110a0f0206180617071d12090a0810"
		const uintOOLYxDu = BigInt("146")
		const uintR6yycWB = BigInt("424")
		const uintdwpnnKd = BigInt("1589")
		const addressifywImj = accounts[1]
		const addressEW8TIKg = accounts[2]
		const uintGATtdc = BigInt("1241")
		const addressWuEjKy7 = accounts[0]
		const addressZ0uj9Ns = accounts[4]
		const uintlpqDKqy = await FompJWRKurD.allowance.call(addressGQb0P4i, addressyq5SNff, {from: accounts[2]});
		const uint96jDna5aQ = await FompJWRKurD.getCurrentVotes.call(addressS0reEZZ, {from: accounts[3]});
//		const addressnDgUTWv = await FompJWRKurD.delegateBySig.call(addressifywImj, uintdwpnnKd, uintR6yycWB, uintOOLYxDu, bytefBW9h7o, bytensPzlX, {from: accounts[0]});
//		const uint96wKdPzRp = await FompJWRKurD.getCurrentVotes.call(addressEW8TIKg, {from: accounts[1]});
//		const boolfq9IhPb = await FompJWRKurD.transferFrom.call(addressZ0uj9Ns, addressWuEjKy7, uintGATtdc, {from: accounts[1]});

		assert.equal(uint96jDna5aQ, BigInt("0"))
		assert.equal(uintlpqDKqy, BigInt("0"))
		await expect(FompJWRKurD.delegateBySig.call(addressifywImj, uintdwpnnKd, uintR6yycWB, uintOOLYxDu, bytefBW9h7o, bytensPzlX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressX8NMtnR = accounts[1]
		const Fompm437GPi = await Fomp.new(addressX8NMtnR, {from: accounts[4]});
		const uintbJ4cAlH = BigInt("84")
		const addresssT1wGkE = accounts[4]
		const address50vhEM = accounts[3]
		const uintGQV14e7 = BigInt("1569")
		const addressoZqlWiB = accounts[4]
		const addressIrstJZ = accounts[3]
		const uintcrZsR2K = BigInt("162")
		const addressdSVppnB = accounts[2]
		const uintuyFAg8 = BigInt("1832")
		const addressWXeaqAT = accounts[0]
		const addressUlGliGG = accounts[3]
		const bytea5xvW8w = "0x14130a050c1d0a0e03081504060d000b0a131005201d060a0d0f011b0a0c0f11"
		const byteNq4rIX8 = "0x0f14151014180f0701070a191f171f1c14131f1f120b131809180d05100a041b"
		const uintPeq9PI7 = BigInt("33")
		const uintfWMmeSB = BigInt("1209")
		const uinteUu9jih = BigInt("1223")
		const addressyYLUUa = accounts[2]
		const boolz3AUdhX = await Fompm437GPi.approve.call(addresssT1wGkE, uintbJ4cAlH, {from: accounts[2]});
		const addressuEnvsN = await Fompm437GPi.delegate.call(address50vhEM, {from: accounts[1]});
//		const boolx6PT3wv = await Fompm437GPi.transferFrom.call(addressIrstJZ, addressoZqlWiB, uintGQV14e7, {from: accounts[2]});
//		const boolGiZDgXq = await Fompm437GPi.approve.call(addressdSVppnB, uintcrZsR2K, {from: accounts[5]});
//		const boolrGYdAr = await Fompm437GPi.approve.call(addressWXeaqAT, uintuyFAg8, {from: accounts[3]});
//		const uint96OUkCS7X = await Fompm437GPi.getCurrentVotes.call(addressUlGliGG, {from: accounts[2]});
//		const addresspuKIApT = await Fompm437GPi.delegateBySig.call(addressyYLUUa, uinteUu9jih, uintfWMmeSB, uintPeq9PI7, byteNq4rIX8, bytea5xvW8w, {from: accounts[5]});

		assert.equal(boolz3AUdhX, true)
		await expect(Fompm437GPi.transferFrom.call(addressIrstJZ, addressoZqlWiB, uintGQV14e7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressGfNTgq3 = accounts[1]
		const Fompm437GPi = await Fomp.new(addressGfNTgq3, {from: accounts[4]});
		const uintEuM9yO2 = BigInt("84")
		const addressbVfUix = accounts[4]
		const addresskrsJUwO = accounts[4]
		const addressAJjBtIJ = accounts[3]
		const uintT0zHOAb = BigInt("695")
		const addressZmaMZD9 = accounts[4]
		const uintIVzfi07 = BigInt("1832")
		const addressJKWI6pd = accounts[0]
		const addressGBelGks = accounts[4]
		const byteNtgDyza = "0x14130a050c1d0a0e03081504060d000b0a131005201d060a0d0f011b0a0c0f11"
		const bytetANVcg = "0x0f14151014180f0701070a191f171f1c14131f1f120b131809180d05100a041b"
		const uintuRonpam = BigInt("33")
		const uintWmocZQp = BigInt("1209")
		const uintXW4cq3p = BigInt("1223")
		const addressi4bbo7 = accounts[2]
		const boolz3AUdhX = await Fompm437GPi.approve.call(addressbVfUix, uintEuM9yO2, {from: accounts[2]});
		const addressHCSEYQc = await Fompm437GPi.delegate.call(addresskrsJUwO, {from: accounts[4]});
		const addressuEnvsN = await Fompm437GPi.delegate.call(addressAJjBtIJ, {from: accounts[1]});
		const boolvCOLjuB = await Fompm437GPi.transfer.call(addressZmaMZD9, uintT0zHOAb, {from: accounts[1]});
		const boolrGYdAr = await Fompm437GPi.approve.call(addressJKWI6pd, uintIVzfi07, {from: accounts[3]});
		const uint96OUkCS7X = await Fompm437GPi.getCurrentVotes.call(addressGBelGks, {from: accounts[2]});
//		const addresspuKIApT = await Fompm437GPi.delegateBySig.call(addressi4bbo7, uintXW4cq3p, uintWmocZQp, uintuRonpam, bytetANVcg, byteNtgDyza, {from: accounts[5]});

		assert.equal(boolrGYdAr, true)
		assert.equal(boolvCOLjuB, true)
		assert.equal(boolz3AUdhX, true)
		assert.equal(uint96OUkCS7X, BigInt("0"))
		await expect(Fompm437GPi.delegateBySig.call(addressi4bbo7, uintXW4cq3p, uintWmocZQp, uintuRonpam, bytetANVcg, byteNtgDyza, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressEuKMLgd = accounts[1]
		const Fompm437GPi = await Fomp.new(addressEuKMLgd, {from: accounts[4]});
		const uintFxOKQbY = BigInt("52")
		const addressSTM3UyQ = accounts[0]
		const uintFQlUqfu = BigInt("50")
		const addressjx7aMy0 = accounts[1]
		const uint96aV0cfUg = await Fompm437GPi.getPriorVotes.call(addressSTM3UyQ, uintFxOKQbY, {from: accounts[3]});
		const boolz3AUdhX = await Fompm437GPi.approve.call(addressjx7aMy0, uintFQlUqfu, {from: accounts[2]});

		assert.equal(boolz3AUdhX, true)
		assert.equal(uint96aV0cfUg, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressoLxXU65 = accounts[1]
		const Fompm437GPi = await Fomp.new(addressoLxXU65, {from: accounts[4]});
		const addresslISCrjj = accounts[2]
		const byteDDPUmVJ = "0x1911050b0c111a0418040c1e19120c09070a11200314031515040d0f13020c06"
		const bytedHR3T8n = "0x0d0403030507170d1c151713050d0b0d1513031f180f0d1f040713021f120d1a"
		const uintZh9yMTC = BigInt("28")
		const uintA9TKSM5 = BigInt("916")
		const uintrj9feMj = BigInt("68")
		const addressVz1nqUr = accounts[4]
		const addressZ0tvTe = accounts[2]
		const addressQPZw66V = await Fompm437GPi.delegate.call(addresslISCrjj, {from: accounts[1]});
//		const addressVHx9CXW = await Fompm437GPi.delegateBySig.call(addressVz1nqUr, uintrj9feMj, uintA9TKSM5, uintZh9yMTC, bytedHR3T8n, byteDDPUmVJ, {from: accounts[5]});
//		const addressolxLO2A = await Fompm437GPi.delegate.call(addressZ0tvTe, {from: accounts[4]});

		await expect(Fompm437GPi.delegateBySig.call(addressVz1nqUr, uintrj9feMj, uintA9TKSM5, uintZh9yMTC, bytedHR3T8n, byteDDPUmVJ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})